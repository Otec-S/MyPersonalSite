import { FC } from "react";
import styles from "./navigation.module.css";
import NavigationItem from "./navigation-item/navigation-item";
import useSectionVisibility from "@components/shared/hooks/useSectionVisibility";
import { useTranslation } from "react-i18next";

const Navigation: FC = () => {
  const { about, experience } = useSectionVisibility();

  const { t } = useTranslation();

  return (
    <nav className={styles.navigation} aria-label="In-page jump links">
      <ul className={styles.navigationList}>
        <NavigationItem link="#about" text={t("nav.about")} isActive={about} />
        <NavigationItem
          link="#experience"
          text={t("nav.experience")}
          isActive={experience}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
