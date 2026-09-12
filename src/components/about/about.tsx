import { FC } from "react";
import styles from "./about.module.css";
import { useTranslation } from "react-i18next";

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about} id="about" aria-label="About me">
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{t("about.hiddentitle")}</h2>
      </div>
      <p className={styles.text}>{t("about.intro")}</p>
      <p className={styles.text}>{t("about.epam")}</p>
      <p className={styles.text}>
        {t("about.start")}
        <a
          className={styles.link}
          href="https://en.wikipedia.org/wiki/ZX_Spectrum"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="ZX Spectrum (opens in a new tab)"
        >
          {t("about.ZXSpectrum")}
        </a>
        {t("about.remember")}
      </p>
      <p className={styles.text}>{t("about.hobbies")}</p>
      <p className={styles.text}>{t("about.happy")}</p>
    </section>
  );
};

export default About;
