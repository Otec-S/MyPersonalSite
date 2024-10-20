import { FC } from "react";
import styles from "./navigation.module.css";
import NavigationItem from "./navigation-item/navigation-item";

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <NavigationItem link="#" text="Обо мне" />
        <NavigationItem link="#" text="Опыт" />
        <NavigationItem link="#" text="Проекты" />
      </ul>
    </nav>
  );
};

export default Navigation;
