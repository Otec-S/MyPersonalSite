import { FC, useEffect, useState } from "react";
import styles from "./header.module.css";

import Navigation from "@components/navigation/navigation";
import SocialMedia from "@components/social-media/social-media";

const Header: FC = () => {
  const [link, setLink] = useState<string>("#about");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setLink("#");
      } else {
        setLink("#about");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.headerTitle}>
          <a href={link} className={styles.headerTitleLink}>
            Сергей Григораш
          </a>
        </h1>
        <h2 className={styles.headerSubTitle}>
          Frontend Developer | React TypeScript
        </h2>
        <p className={styles.text}>Сделаю это красиво</p>
        <Navigation />
      </div>
      <SocialMedia />
    </header>
  );
};

export default Header;
