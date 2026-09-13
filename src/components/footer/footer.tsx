import { FC } from "react";
import styles from "./footer.module.css";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {t("footer.designInspiredBy")}{" "}
        <a
          className={styles.link}
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="brittanychiang.com (opens in a new tab)"
        >
          brittanychiang.com
        </a>
        . {t("footer.builtWith")}
      </p>
    </footer>
  );
};

export default Footer;
