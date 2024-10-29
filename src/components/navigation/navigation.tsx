import { FC } from "react";
import styles from "./navigation.module.css";
import NavigationItem from "./navigation-item/navigation-item";

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <NavigationItem link="#about" text="Обо мне" />
        <NavigationItem link="#experience" text="Опыт" />
      </ul>
    </nav>
  );
};

export default Navigation;
