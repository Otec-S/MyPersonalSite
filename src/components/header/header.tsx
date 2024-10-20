import { FC } from "react";
import styles from "./header.module.css";

import Navigation from "@components/navigation/navigation";
import SocialMedia from "@components/social-media/social-media";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        Сергей <br />
        Григораш
      </h1>
      <h2 className={styles.headerSubTitle}>Frontend Developer</h2>
      <p className={styles.text}>Сделаем это красиво</p>
      <Navigation />
      <SocialMedia />
    </header>
  );
};

export default Header;
