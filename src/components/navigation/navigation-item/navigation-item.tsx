import { FC } from "react";
import styles from "./navigation-item.module.css";

interface Props {
  link: string;
  text: string;
  isActive: boolean;
}

const NavigationItem: FC<Props> = ({ link, text, isActive }) => {
  return (
    <li className={`${styles.navigationItem} ${isActive ? styles.active : ""}`}>
      <a href={link} className={styles.navigationLink}>
        <span className={styles.navigationIcon}></span>
        <span className={styles.navigationText}>{text.toUpperCase()}</span>
      </a>
    </li>
  );
};

export default NavigationItem;
