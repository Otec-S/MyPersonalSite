import { FC } from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
} from "@assets/icons";
import { SOCIAL_LINKS } from "@components/shared/links";
import styles from "./social-media.module.css";

const SocialMedia: FC = () => {
  return (
    <ul className={styles.socialMedia} aria-label="Social media">
      <li className={styles.socialMediaIcon}>
        <a
          href={SOCIAL_LINKS.github}
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
          href={SOCIAL_LINKS.linkedin}
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
          href={SOCIAL_LINKS.telegram}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Telegram (opens in a new tab)"
          title="Telegram"
        >
          <TelegramIcon />
        </a>
      </li>
      <li className={`${styles.socialMediaIcon} ${styles.socialMediaIconMail}`}>
        <a
          href={SOCIAL_LINKS.email}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Email (opens in a new tab)"
          title="Email"
        >
          <MailIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
