import { FC } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "./projects.data";
import ProjectCard from "./project-card";
import styles from "./private-projects.module.css";

const PrivateProjects: FC = () => {
  const { t } = useTranslation();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.privateProjects}
      id="private-projects"
      aria-label={t("privateProjects.title")}
    >
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{t("privateProjects.title")}</h2>
      </div>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.id} className={styles.listItem}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PrivateProjects;
