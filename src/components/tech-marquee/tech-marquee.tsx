import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styles from "./tech-marquee.module.css";

interface TechItem {
  name: string;
  icon?: ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "PostgreSQL" },
  { name: "Prisma" },
  { name: "Vite" },
  { name: "Claude API" },
  { name: "MCP" },
  { name: "Docker" },
  // EPM-SDAI
  { name: "Claude Code" },
  { name: "AI Agents & Skills" },
  { name: "Spec-Driven Development" },
  { name: "Serena MCP" },
  { name: "Cursor" },
  { name: "Python" },
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
