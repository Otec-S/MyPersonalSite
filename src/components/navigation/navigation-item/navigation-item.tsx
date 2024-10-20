import { FC } from "react";
import styles from "./navigation-item.module.css";

interface Props {
  link: string;
  text: string;
}

const NavigationItem: FC<Props> = ({ link, text }) => {
  return (
    <li className={styles.navigationItem}>
      <a href={link} className={styles.navigationLink}>
        <span className={styles.navigationIcon}></span>
        <span className={styles.navigationText}>{text.toUpperCase()}</span>
      </a>
    </li>
  );
};

export default NavigationItem;
