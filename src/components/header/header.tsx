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
    <>
      <h1 className={styles.headerTitle}>Сергей Григораш</h1>
      <h2 className={styles.headerSubTitle}>Frontend Developer</h2>
      <p className={styles.text}>Сделаем это красиво</p>
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
            aria-label="Telegram (opens in a new tab)"
            title="Telegram"
          >
            <MailIcon />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
