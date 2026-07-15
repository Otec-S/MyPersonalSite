import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLink } from "@assets/icons";
import StackItem from "@components/stack-item/stack-item";
import CertificateModal from "@components/certificates/certificate-modal";
import { Project, ProjectScreenshot } from "./projects.data";
import styles from "./project-card.module.css";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { t } = useTranslation();
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<ProjectScreenshot | null>(null);

  return (
    <article className={styles.card}>
      <span className={styles.activeCard}></span>
      <header className={styles.header}>{t("privateProjects.label")}</header>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <a
            className={styles.titleLink}
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${project.title} — ${t("privateProjects.live")} (opens in a new tab)`}
          >
            {project.title}
            <span className={styles.arrowLink}>
              <ArrowLink />
            </span>
          </a>
        </h3>
        <p className={styles.description}>{t(project.descriptionKey)}</p>
        <a
          className={styles.repoLink}
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${project.title} — ${t("privateProjects.source")} (opens in a new tab)`}
        >
          {t("privateProjects.source")}
        </a>
        <ul className={styles.stack}>
          {project.stack.map((technology, index) => (
            <li key={index}>
              <StackItem itemTitle={technology} />
            </li>
          ))}
        </ul>
        {project.screenshots.length > 0 && (
          <ul className={styles.carousel} aria-label={t("privateProjects.screenshots")}>
            {project.screenshots.map((screenshot) => (
              <li key={screenshot.id} className={styles.carouselItem}>
                <button
                  type="button"
                  className={styles.screenshotButton}
                  onClick={() => setSelectedScreenshot(screenshot)}
                  aria-label={screenshot.title}
                >
                  <img
                    className={styles.imagePreview}
                    src={screenshot.url}
                    alt=""
                    loading="lazy"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedScreenshot && (
        <CertificateModal
          certificate={selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
        />
      )}
    </article>
  );
};

export default ProjectCard;
