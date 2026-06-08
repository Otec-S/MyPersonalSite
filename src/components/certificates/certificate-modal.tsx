import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Certificate } from "./certificates.data";
import styles from "./certificate-modal.module.css";

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

const CertificateModal: FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
      onClick={handleBackdropClick}
    >
      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label={t("certificates.close")}
      >
        ×
      </button>
      <div className={styles.content}>
        {certificate.type === "image" ? (
          <img
            className={styles.image}
            src={certificate.url}
            alt={certificate.title}
          />
        ) : (
          <iframe
            className={styles.pdfFrame}
            src={certificate.url}
            title={certificate.title}
          />
        )}
      </div>
    </div>
  );
};

export default CertificateModal;
