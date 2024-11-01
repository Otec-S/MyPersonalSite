import { FC } from "react";
import styles from "./navigation.module.css";
import NavigationItem from "./navigation-item/navigation-item";
import useSectionVisibility from "@components/shared/hooks/useSectionVisibility";

const Navigation: FC = () => {
  const { about, experience } = useSectionVisibility();

  return (
    <nav className={styles.navigation} aria-label="In-page jump links">
      <ul className={styles.navigationList}>
        <NavigationItem link="#about" text="Обо мне" isActive={about} />
        <NavigationItem link="#experience" text="Опыт" isActive={experience} />
      </ul>
    </nav>
  );
};

export default Navigation;
