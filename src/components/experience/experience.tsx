import { FC, useEffect } from "react";
import Card from "@components/card/card";
import styles from "./experience.module.css";
import { ArrowLink } from "@assets/icons";
import { useTranslation } from "react-i18next";

const Experience: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const nbsp = "\u00A0";

  useEffect(() => {
    if (window.innerWidth >= 1000) {
      const listItems = document.querySelectorAll(`.${styles.listItem}`);

      listItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          listItems.forEach((el) => {
            if (el !== item) {
              (el as HTMLElement).classList.add(styles.fade);
            }
          });
        });

        item.addEventListener("mouseleave", () => {
          listItems.forEach((el) => {
            (el as HTMLElement).classList.remove(styles.fade);
          });
        });
      });
    }
  }, []);

  return (
    <section id="experience" aria-label="Work experience">
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{t("experience.experience")}</h2>
      </div>
      <ul>
        <li className={styles.listItem}>
          <Card
            header={`${t("experience.july")}${nbsp}2025 - ${t("experience.now")}`}
            title="L2 Middle Developer - EPAM SYSTEMS"
            description={
              <>
                <a
                  className={styles.link}
                  href="https://www.epam.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of EPAM SYSTEMS (opens in a new tab)"
                >
                  EPAM Systems, Inc.
                </a>{" "}
                {t("experience.EPAM-description")}{" "}

                {t("experience.AMCH-experience")}{" "}
                <a
                  className={styles.link}
                  href="https://payloadcms.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Payload CMS site (opens in a new tab)"
                >
                  CMS Payload
                </a>{" "}
                {t("experience.other-EPAM-experience")}{" "}
              </>
            }
            stack={[
              "TypeScript",
              "React",
              "Next.js",
              "Github Copilot",
              "Jira",
              "CMS",
              "GraphQL",
              "TanStack Query",
              "Tailwind CSS",
            ]}
          />
        </li>
        <li className={styles.listItem}>
          <Card
            header={`${t("experience.january")}${nbsp}2025 - ${t("experience.july")}${nbsp}2025`}
            title="Fullstack Developer - ROCKET TECH SCHOOL"
            description={
              <>
                <a
                  className={styles.link}
                  href="https://www.rts.school/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of RTS (opens in a new tab)"
                >
                  {t("experience.RTS")}
                </a>{" "}
                {t("experience.RTS-description")}{" "}
                {t("experience.my-RTS-role")}{" "}
                <a
                  className={styles.link}
                  href="https://space.rts.school/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="RTS platform (opens in a new tab)"
                >
                  {t("experience.RTS-platform")}
                </a>{" "}
                {t("experience.RTS-my-experience")}{" "}
              </>
            }
            stack={[
              "TypeScript",
              "React",
              "RTK Query",
              "Next.js",
              "Nest.js",
              "i18next",
              "Less",
              "WebRTC",
              "Ant Design",
            ]}
          />
        </li>
        <li className={styles.listItem}>
          <Card
            header={`${t("experience.january")}${nbsp}2024 - ${t("experience.december")}${nbsp}2024`}
            title="Frontend Developer - VILISOV COMPANY"
            description={
              <>
                {t("experience.Vilisov")}{" "}
                <a
                  className={styles.link}
                  href="https://easyqr.online/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of Easy QR (opens in a new tab)"
                >
                  EasyQR
                </a>{" "}
                {t("experience.EQ-customers")}{" "}
                <span className={styles.link}>
                  EasyAnalytics {t("experience.frozen")}
                </span>{" "}
                {t("experience.customers")}{" "}
                <a
                  className={styles.link}
                  href="https://uzum.uz/ru"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of Uzum (opens in a new tab)"
                >
                  Uzum
                </a>{" "}
                {t("experience.my-EA-role")}
              </>
            }
            stack={[
              "TypeScript",
              "React",
              "Redux",
              "Ant Design",
              "Recharts",
              "Jest",
              "React Router",
              "i18next",
              "Docker",
            ]}
          />
        </li>
        <li className={styles.listItem}>
          <Card
            header={`${t("experience.august")}${nbsp}2024 - ${t("experience.october")}${nbsp}2024`}
            title="Frontend Developer - BurnCode"
            description={
              <>
                <a
                  className={styles.link}
                  href="https://burncode.ru"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of BurnCode (opens in a new tab)"
                >
                  {t("experience.burncode-link")}
                </a>{" "}
                {t("experience.burncode-description")}
              </>
            }
            stack={["TypeScript", "React", "RTK", "MUI", "Docker"]}
          />
        </li>
        <li className={styles.listItem}>
          <Card
            header={`${t("experience.january")}${nbsp}2023 - ${t("experience.december")}${nbsp}2023`}
            title="Frontend Developer - EDUSENSE"
            description={
              <>
                {t("experience.paid-app")}
                <a
                  className={styles.link}
                  href="https://emaktab.uz"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of E-maktab (opens in a new tab)"
                >
                  {t("experience.paid-app-link")}
                </a>{" "}
                {t("experience.edusense-description")}
              </>
            }
            stack={[
              "TypeScript",
              "React",
              "Jest",
              "Express.js",
              "MongoDB",
              "Nginx",
            ]}
          />
        </li>
        <li className={styles.listItem}>
          <Card
            header={`${t("experience.march")}${nbsp}2021 - ${t("experience.december")}${nbsp}2022`}
            title="Web Developer - Law Firm Adviser"
            description={
              <>
                {t("experience.create-and-support")}{" "}
                <a
                  className={styles.link}
                  href="https://www.adviser-spb.ru/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of Law Firm Adviser (opens in a new tab)"
                >
                  {t("experience.corporate-site")}
                </a>
                {t("experience.SEO")}
              </>
            }
            stack={["HTML", "CSS", "BEM"]}
          />
        </li>
      </ul>
      <a
        className={styles.link}
        href={
          currentLanguage === "ru"
            ? "https://drive.google.com/file/d/1llrzqbYOczDMTGBAQ-wUryjO0ITzmxgU/view?usp=sharing"
            : "https://drive.google.com/file/d/1U6KYfGETxMM7a9PHjhrz7o1UA7eGfc5F/view?usp=sharing"
        }
        target="_blank"
        rel="noreferrer noopener"
        aria-label="CV"
      >
        <h3 className={styles.CVtitle}>
          {t("experience.full-CV")}
          <span className={styles.arrowLink}>
            <ArrowLink />
          </span>
        </h3>
      </a>
    </section>
  );
};

export default Experience;
