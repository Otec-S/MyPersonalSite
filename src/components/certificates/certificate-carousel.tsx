import { FC } from "react";
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
  return (
    <div className={styles.carousel}>
      {certificates.map((certificate) => (
        <button
          key={certificate.id}
          type="button"
          className={styles.item}
          onClick={() => onSelect(certificate)}
        >
          <img
            className={styles.imagePreview}
            src={certificate.url}
            alt={certificate.title}
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );
};

export default CertificateCarousel;
