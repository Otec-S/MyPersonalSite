import { FC } from "react";
import styles from "./footer.module.css";

const BADGE_URL =
  "https://hits.sh/footer.sergeygrigorash.com.svg" +
  "?style=flat-square&label=visits&color=48bf91&labelColor=0f172a";

const Footer: FC = () => (
  <footer className={styles.footer}>
    <img src={BADGE_URL} alt="visitor count" height={20} />
  </footer>
);

export default Footer;
