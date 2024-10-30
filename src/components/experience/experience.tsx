import { FC, useEffect } from "react";
import Card from "@components/card/card";
import styles from "./experience.module.css";

const Experience: FC = () => {
  useEffect(() => {
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
  }, []);

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Опыт</h2>
      </div>
      <ul>
        <li className={styles.listItem}>
          <Card
            header="2024 - по н.в."
            title="Frontend Developer - VILISOV COMPANY"
            description={
              <>
                Амбициозная компания из Тюмени создает два флагманских продукта:
                электронное меню{" "}
                <a
                  className={styles.link}
                  href="https://easyqr.online/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of Easy QR (opens in a new tab)"
                >
                  EasyQR
                </a>{" "}
                для российских и международных клиентов из HoReCa и мощное
                аналитическое приложение{" "}
                <span className={styles.link}>
                  EasyAnalytics (проект временно заморожен)
                </span>{" "}
                для продавцов на маркетплейсе{" "}
                <a
                  className={styles.link}
                  href="https://uzum.uz/ru"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of Uzum (opens in a new tab)"
                >
                  Uzum
                </a>{" "}
                (Узбекистан). По обоим проектам я реализовал их frontend части,
                включая бивалютные таблицы, линейные и круговые графики,
                подписку клиентов на уведомления об изменениях финансовых
                показателей конкурентов, аналитику продаж самого клиента,
                внедрение i18n.
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
            ]}
          />
        </li>
        <li className={styles.listItem}>
          <Card
            header="2024 - 2024"
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
            stack={["TypeScript", "React", "RTK", "MUI"]}
          />
        </li>
        <li className={styles.listItem}>
          <Card
            header="2023 - 2023"
            title="Frontend Developer - EDUSENSE"
            description={
              <>
                Платное приложение к{" "}
                <a
                  className={styles.link}
                  href="https://emaktab.uz"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Site of Emaktab (opens in a new tab)"
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
            header="2021 - 2023"
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
    </section>
  );
};

export default Experience;
