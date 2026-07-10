import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { certificates } from "./certificates.data";
import CertificateCarousel from "./certificate-carousel";
import CertificateModal from "./certificate-modal";
import styles from "./certificates.module.css";
import type { Certificate } from "./certificates.data";

const Certificates: FC = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  if (certificates.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.certificates}
      id="certificates"
      aria-label={t("certificates.title")}
    >
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{t("certificates.title")}</h2>
      </div>
      <CertificateCarousel
        certificates={certificates}
        onSelect={setSelectedCertificate}
      />
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};

export default Certificates;
