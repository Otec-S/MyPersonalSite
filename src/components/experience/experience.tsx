import { FC, useEffect } from "react";
import Card from "@components/card/card";
import styles from "./experience.module.css";
import { ArrowLink } from "@assets/icons";
import { useTranslation } from "react-i18next";

const Experience: FC = () => {
  const { t } = useTranslation();
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
        <h2 className={styles.title}>Опыт</h2>
      </div>
      <ul>
        <li className={styles.listItem}>
          <Card
            header={`${t("experience.january")}${nbsp}2024 - ${t("experience.now")}`}
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
            header="авг&nbsp;2024 - окт&nbsp;2024"
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
                  Редактор кода
                </a>{" "}
                , помогающий сотрудникам отдела HR и нанимающим менеджерам
                подбирать и тестировать IT персонал в компанию. Я помог ребятам
                с поиском и устранением багов программы, а также улучшил кодовую
                базу.
              </>
            }
            stack={["TypeScript", "React", "RTK", "MUI", "Docker"]}
          />
        </li>
        <li className={styles.listItem}>
          <Card
            header="янв&nbsp;2023 - дек&nbsp;2023"
            title="Frontend Developer - EDUSENSE"
            description={
              <>
                Платное приложение к{" "}
                <a
                  className={styles.link}
                  href="https://emaktab.uz"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of E-maktab (opens in a new tab)"
                >
                  электронному школьному дневнику
                </a>{" "}
                для детального анализа успеваемости учащегося. Я помог коллегам
                в разработке frontend-части, а также поработал с backend:
                взаимодействие с БД MongoDB, настройка сервера Nginx.
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
            header="март&nbsp;2021 - дек&nbsp;2022"
            title="Web Developer - Юридическая фирма 'Эдвайзер'"
            description={
              <>
                Создал и поддерживал{" "}
                <a
                  className={styles.link}
                  href="https://www.adviser-spb.ru/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of Law Firm Adviser (opens in a new tab)"
                >
                  корпоративный сайт компании
                </a>
                , провел SEO оптимизацию.
              </>
            }
            stack={["HTML", "CSS", "BEM"]}
          />
        </li>
      </ul>
      <a
        className={styles.link}
        href="https://drive.google.com/file/d/1llrzqbYOczDMTGBAQ-wUryjO0ITzmxgU/view?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="CV"
      >
        <h3 className={styles.CVtitle}>
          Полное резюме
          <span className={styles.arrowLink}>
            <ArrowLink />
          </span>
        </h3>
      </a>
    </section>
  );
};

export default Experience;
