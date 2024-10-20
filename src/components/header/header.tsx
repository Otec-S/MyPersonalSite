import { FC } from "react";
import styles from "./header.module.css";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
} from "@assets/icons";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        Сергей <br />
        Григораш
      </h1>
      <h2 className={styles.headerSubTitle}>Frontend Developer</h2>
      <p className={styles.text}>Сделаем это красиво</p>

      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <a href="#" className={styles.navigationLink}>
              <span className={styles.navigationIcon}></span>
              <span className={styles.navigationText}>ОБО МНЕ</span>
            </a>
          </li>
        </ul>
      </nav>

      <ul className={styles.socialMedia} aria-label="Social media">
        <li className={styles.socialMediaIcon}>
          <a
            href="https://github.com/Otec-S"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
        </li>
        <li className={styles.socialMediaIcon}>
          <a
            href="http://www.linkedin.com/in/sergey-grigorash"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li className={styles.socialMediaIcon}>
          <a
            href="https://t.me/Otec_S"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Telegram (opens in a new tab)"
            title="Telegram"
          >
            <TelegramIcon />
          </a>
        </li>
        <li
          className={`${styles.socialMediaIcon} ${styles.socialMediaIconMail}`}
        >
          <a
            href="mailto:sergey.adviser@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Email (opens in a new tab)"
            title="Email"
          >
            <MailIcon />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
