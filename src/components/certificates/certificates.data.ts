export interface Certificate {
  id: string;
  title: string;
  url: string;
}

const imageModules = import.meta.glob("../../assets/certificates/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const formatCertificateTitle = (filePath: string): string => {
  const fileName = filePath.split("/").pop()?.replace(/\.[^.]+$/, "") ?? filePath;

  return fileName
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const getFileName = (filePath: string): string =>
  filePath.split("/").pop()?.replace(/\.[^.]+$/, "") ?? filePath;

// Certificates listed here are pinned to the front, in this order; the rest follow alphabetically.
const pinnedOrder = ["OpenAI-Cyber-Deployment-Practitioner"];

export const certificates: Certificate[] = Object.entries(imageModules)
  .map(([path, url]) => ({
    id: getFileName(path),
    title: formatCertificateTitle(path),
    url: url as string,
  }))
  .sort((a, b) => {
    const aPinned = pinnedOrder.indexOf(a.id);
    const bPinned = pinnedOrder.indexOf(b.id);

    if (aPinned !== -1 || bPinned !== -1) {
      if (aPinned === -1) return 1;
      if (bPinned === -1) return -1;
      return aPinned - bPinned;
    }

    return a.title.localeCompare(b.title);
  });
