import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Certificate } from "./certificates.data";
import styles from "./certificate-carousel.module.css";

interface CertificateCarouselProps {
  certificates: Certificate[];
  onSelect: (certificate: Certificate) => void;
}

const CertificateCarousel: FC<CertificateCarouselProps> = ({
  certificates,
  onSelect,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.carousel}>
      {certificates.map((certificate) => (
        <button
          key={certificate.id}
          type="button"
          className={styles.item}
          onClick={() => onSelect(certificate)}
          aria-label={
            certificate.type === "pdf"
              ? `${certificate.title}. ${t("certificates.viewPdf")}`
              : certificate.title
          }
        >
          {certificate.type === "image" ? (
            <img
              className={styles.imagePreview}
              src={certificate.url}
              alt=""
              loading="lazy"
            />
          ) : (
            <div className={styles.pdfPreview}>
              <span className={styles.pdfIcon}>PDF</span>
              <span className={styles.title}>{certificate.title}</span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default CertificateCarousel;
