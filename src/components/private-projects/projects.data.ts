export interface ProjectScreenshot {
  id: string;
  title: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  descriptionKey: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  screenshots: ProjectScreenshot[];
}

const imageModules = import.meta.glob("../../assets/projects/*/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const getFileName = (filePath: string): string =>
  filePath.split("/").pop()?.replace(/\.[^.]+$/, "") ?? filePath;

const getProjectId = (filePath: string): string =>
  filePath.split("/").at(-2) ?? "";

const formatScreenshotTitle = (filePath: string): string =>
  getFileName(filePath)
    .replace(/^\d+[-_]/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const screenshotsByProject = new Map<string, ProjectScreenshot[]>();

Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .forEach(([path, url]) => {
    const projectId = getProjectId(path);
    const screenshot: ProjectScreenshot = {
      id: getFileName(path),
      title: formatScreenshotTitle(path),
      url: url as string,
    };
    screenshotsByProject.set(projectId, [
      ...(screenshotsByProject.get(projectId) ?? []),
      screenshot,
    ]);
  });

export const projects: Project[] = [
  {
    id: "calorie-tracker",
    title: "AI Calorie Tracker",
    descriptionKey: "privateProjects.calorie-description",
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "PWA",
      "Express.js",
      "Claude API",
      "Nginx",
      "PM2",
    ],
    liveUrl: "https://78-47-166-130.sslip.io",
    repoUrl: "https://github.com/Otec-S/calorie-tracker",
    screenshots: screenshotsByProject.get("calorie-tracker") ?? [],
  },
  {
    id: "files-service",
    title: "Family File Service",
    descriptionKey: "privateProjects.files-description",
    stack: [
      "TypeScript",
      "React",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "AWS S3",
      "JWT",
      "Docker",
      "i18next",
    ],
    liveUrl: "https://files.sergeygrigorash.com",
    repoUrl: "https://github.com/Otec-S/MyFilesService",
    screenshots: screenshotsByProject.get("files-service") ?? [],
  },
];
