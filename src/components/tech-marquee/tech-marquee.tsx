import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { SiReact, SiTypescript, SiNodedotjs, SiLangchain } from "react-icons/si";
import styles from "./tech-marquee.module.css";

interface TechItem {
  name: string;
  icon?: ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MCP" },
  // EPM-SDAI
  { name: "AI Agents & Skills" },
  { name: "Spec-Driven Development" },
  { name: "LangChain", icon: <SiLangchain /> },
];

const TechList: FC<{ hidden?: boolean }> = ({ hidden }) => (
  <ul className={styles.list} aria-hidden={hidden}>
    {TECH_ITEMS.map((item) => (
      <li className={styles.item} key={item.name}>
        {item.icon}
        {item.name}
      </li>
    ))}
  </ul>
);

const TechMarquee: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.marquee}
      id="tech-marquee"
      aria-label={t("techMarquee.ariaLabel")}
    >
      <div className={styles.viewport}>
        <div className={styles.track}>
          <TechList />
          <TechList hidden />
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
