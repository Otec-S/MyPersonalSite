import { FC } from "react";
import styles from "./og-image.module.css";

const OgImage: FC = () => {
  return (
    <div className={styles.og}>
      <div className={styles.name}>Sergey Grigorash</div>
      <div className={styles.item}>Front End Developer</div>
    </div>
  );
};

export default OgImage;
