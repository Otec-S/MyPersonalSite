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
      <p className={styles.text}>
        {t("about.start")}{" "}
        <a
          className={styles.link}
          href="https://en.wikipedia.org/wiki/ZX_Spectrum"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="ZX-Spectrum (opens in a new tab)"
        >
          {t("about.ZXSpectrum")}
        </a>{" "}
        {t("about.remember")} :))
      </p>
      <p className={styles.text}>
        {t("about.after")}{" "}
        <a
          className={styles.link}
          href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="CS50 (opens in a new tab)"
        >
          {t("about.CS50")}
        </a>
        {t("about.courses")}{" "}
        <a
          className={styles.link}
          href="https://practicum.yandex.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Yandex Practicum (opens in a new tab)"
        >
          {t("about.else")}
        </a>
        {t("about.frontend")}{" "}
        <a
          className={styles.link}
          href="https://coda.io/@metalamp/education/web3-frontend-28"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Frontend for web3 blockchain (opens in a new tab)"
        >
          Frontend for web3 blockchain
        </a>
        .
      </p>
      <p className={styles.text}>{t("about.backend")}</p>
      <p className={styles.text}>
        {t("about.hobbies")}{" "}
        <a
          className={styles.link}
          href="https://t.me/BG_clubbot"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Telegram bot (opens in a new tab)"
        >
          {t("about.bot")}
        </a>
        {t("about.run")}{" "}
      </p>
      <p className={styles.text}>{t("about.happy")}</p>
    </section>
  );
};

export default About;
