export type CertificateType = "image" | "pdf";

export interface Certificate {
  id: string;
  title: string;
  url: string;
  type: CertificateType;
}

const imageModules = import.meta.glob("../../assets/certificates/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const pdfModules = import.meta.glob("../../assets/certificates/*.pdf", {
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

const buildCertificates = (
  modules: Record<string, unknown>,
  type: CertificateType
): Certificate[] =>
  Object.entries(modules).map(([path, url]) => ({
    id: getFileName(path),
    title: formatCertificateTitle(path),
    url: url as string,
    type,
  }));

export const certificates: Certificate[] = [
  ...buildCertificates(imageModules, "image"),
  ...buildCertificates(pdfModules, "pdf"),
].sort((a, b) => a.title.localeCompare(b.title));
