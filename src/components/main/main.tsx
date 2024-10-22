import { FC } from "react";
import styles from "./main.module.css";
import About from "@components/about/about";

const Main: FC = () => {
  return (
    <main className={styles.main}>
      <About />
    </main>
  );
};

export default Main;
