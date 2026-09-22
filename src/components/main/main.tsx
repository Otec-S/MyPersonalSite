import { FC } from "react";
import styles from "./main.module.css";
import Metrics from "@components/metrics/metrics";
import TechMarquee from "@components/tech-marquee/tech-marquee";
import About from "@components/about/about";
import Experience from "@components/experience/experience";
import PrivateProjects from "@components/private-projects/private-projects";
import Certificates from "@components/certificates/certificates";

const Main: FC = () => {
  return (
    <main className={styles.main} aria-label="Main page">
      <Metrics />
      <TechMarquee />
      <About />
      <Experience />
      <PrivateProjects />
      <Certificates />
    </main>
  );
};

export default Main;
