import { FC } from "react";
import styles from "./navigation.module.css";
import NavigationItem from "./navigation-item/navigation-item";
import useSectionVisibility from "@components/shared/hooks/useSectionVisibility";
import { certificates } from "@components/certificates/certificates.data";
import { useTranslation } from "react-i18next";

const Navigation: FC = () => {
  const { about, experience, certificates: certificatesVisible } =
    useSectionVisibility();

  const { t } = useTranslation();
  const hasCertificates = certificates.length > 0;

  return (
    <nav className={styles.navigation} aria-label="In-page jump links">
      <ul className={styles.navigationList}>
        <NavigationItem link="#about" text={t("nav.about")} isActive={about} />
        <NavigationItem
          link="#experience"
          text={t("nav.experience")}
          isActive={experience}
        />
        {hasCertificates && (
          <NavigationItem
            link="#certificates"
            text={t("nav.certificates")}
            isActive={certificatesVisible}
          />
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
