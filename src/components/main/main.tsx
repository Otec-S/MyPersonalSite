import { FC } from "react";
import styles from "./main.module.css";
import About from "@components/about/about";
import Experience from "@components/experience/experience";
import Certificates from "@components/certificates/certificates";

const Main: FC = () => {
  return (
    <main className={styles.main} aria-label="Main page">
      <About />
      <Experience />
      <Certificates />
    </main>
  );
};

export default Main;
