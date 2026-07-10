import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Certificate } from "./certificates.data";
import styles from "./certificate-modal.module.css";

const ANIMATION_DURATION_MS = 300;

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

const CertificateModal: FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const { t } = useTranslation();
  const [isClosing, setIsClosing] = useState(false);
  const isClosingRef = useRef(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallback(() => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
    }, ANIMATION_DURATION_MS);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.closing : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
      onClick={handleBackdropClick}
    >
      <button
        type="button"
        className={styles.closeButton}
        onClick={handleClose}
        aria-label={t("certificates.close")}
      >
        ×
      </button>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={certificate.url}
          alt={certificate.title}
        />
      </div>
    </div>
  );
};

export default CertificateModal;
