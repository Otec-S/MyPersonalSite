import { FC, useEffect, useState } from "react";
import styles from "./header.module.css";

import Navigation from "@components/navigation/navigation";
import SocialMedia from "@components/social-media/social-media";

import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "ENG" },
  ru: { nativeName: "RUS" },
};

const Header: FC = () => {
  const { t, i18n } = useTranslation();
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
        <div>
          {(Object.keys(lngs) as Array<keyof typeof lngs>).map((lng, index) => (
            <span key={lng}>
              <button
                className={
                  i18n.resolvedLanguage === lng
                    ? `${styles.lngButton} ${styles.lngButtonActive}`
                    : `${styles.lngButton}`
                }
                type="submit"
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lngs[lng].nativeName}
              </button>
              {index < Object.keys(lngs).length - 1 && (
                <span className={styles.separator}> | </span>
              )}
            </span>
          ))}
        </div>
        <h1 className={styles.headerTitle}>
          <a href={link} className={styles.headerTitleLink}>
            {/* TODO: */}
            <Trans i18nKey="description.part1">Сергей Григораш</Trans>
          </a>
        </h1>
        <h2 className={styles.headerSubTitle}>
          Frontend Developer | React TypeScript
        </h2>
        <p className={styles.text}>
          {/* TODO: */}
          {/* Сделаю это красиво */}
          {t("description.part2")}
        </p>
        <Navigation />
      </div>
      <SocialMedia />
    </header>
  );
};

export default Header;
