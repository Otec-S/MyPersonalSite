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

// Certificates listed here are ordered newest first; any not listed follow alphabetically after them.
const displayOrder = [
  "Gemini-Enterprise-Certified-Partner-Specialist",
  "OpenAI-Cyber-Deployment-Practitioner",
];

export const certificates: Certificate[] = Object.entries(imageModules)
  .map(([path, url]) => ({
    id: getFileName(path),
    title: formatCertificateTitle(path),
    url: url as string,
  }))
  .sort((a, b) => {
    const aOrder = displayOrder.indexOf(a.id);
    const bOrder = displayOrder.indexOf(b.id);

    if (aOrder !== -1 || bOrder !== -1) {
      if (aOrder === -1) return 1;
      if (bOrder === -1) return -1;
      return aOrder - bOrder;
    }

    return a.title.localeCompare(b.title);
  });
