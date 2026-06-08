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

export const certificates: Certificate[] = Object.entries(imageModules)
  .map(([path, url]) => ({
    id: getFileName(path),
    title: formatCertificateTitle(path),
    url: url as string,
  }))
  .sort((a, b) => a.title.localeCompare(b.title));
