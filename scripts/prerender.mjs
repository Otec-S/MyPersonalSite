// Post-build step: snapshot the fully client-rendered page into the built
// index.html so crawlers/ATS parsers that don't execute JS see real content.
// Real users still get the interactive app: main.tsx keeps using createRoot,
// which re-renders over this static markup once JS loads.
import { createServer } from "node:http";
import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith("--")) {
      args[argv[i].slice(2)] = argv[i + 1];
      i += 1;
    }
  }
  return args;
}

const { outDir, base } = parseArgs(process.argv.slice(2));
if (!outDir || !base) {
  console.error("Usage: node scripts/prerender.mjs --outDir <dist|dist2> --base </path/>");
  process.exit(1);
}

const distPath = path.resolve(root, outDir);
const normalizedBase = base.endsWith("/") ? base : `${base}/`;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function startServer(rootDir, urlBase) {
  const server = createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent(req.url.split("?")[0]);
      if (!urlPath.startsWith(urlBase)) {
        res.writeHead(404).end("Not found");
        return;
      }
      let relativePath = urlPath.slice(urlBase.length);
      if (relativePath === "" || relativePath.endsWith("/")) {
        relativePath += "index.html";
      }
      let filePath = path.join(rootDir, relativePath);

      try {
        const stats = await stat(filePath);
        if (stats.isDirectory()) {
          filePath = path.join(filePath, "index.html");
        }
      } catch {
        filePath = path.join(rootDir, "index.html");
      }

      const ext = path.extname(filePath);
      const content = await readFile(filePath);
      res.writeHead(200, { "Content-Type": MIME_TYPES[ext] ?? "application/octet-stream" });
      res.end(content);
    } catch (err) {
      res.writeHead(500).end(String(err));
    }
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

async function main() {
  const { server, port } = await startServer(distPath, normalizedBase);
  const url = `http://127.0.0.1:${port}${normalizedBase}?lng=en`;

  const browser = await puppeteer.launch({ headless: "new" });
  try {
    const page = await browser.newPage();
    page.on("pageerror", (err) => console.error("[prerender][pageerror]", err));

    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Wait for the i18next-suspended Loader (role="status") to disappear,
    // i.e. translations have loaded and the real content has mounted.
    await page.waitForSelector('[role="status"]', { hidden: true, timeout: 30000 });
    // Extra safety: make sure real heading content is present.
    await page.waitForFunction(
      () => {
        const heading = document.querySelector("h1, h2");
        return !!heading && heading.textContent.trim().length > 0;
      },
      { timeout: 30000 }
    );

    const html = await page.content();
    const indexPath = path.join(distPath, "index.html");
    await writeFile(indexPath, `<!doctype html>\n${html}`, "utf-8");
    console.log(`[prerender] Snapshot written to ${indexPath}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
