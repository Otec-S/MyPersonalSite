import { FC } from "react";
// import styles from "./experience.module.css";
import Card from "@components/card/card";

const Experience: FC = () => {
  return (
    <section>
      <ul>
        <li>
          <Card
            header="2024 - по н.в."
            title="Frontend Developer - VILISOV COMPANY"
            description="Амбициозная компания из Тюмени создает два флагманских продукта: электронное меню EasyQR для российских и международных клиентов из HoReCa и мощное аналитическое приложение для продавцов на маркетплейсе Uzum (Узбекистан). По обоим проектам я реализовал их frontend части, включая бивалютные таблицы, линейные и круговые графики, подписку клиентов на уведомления об изменениях финансовых показателей конкурентов, аналитику продаж самого клиента, внедрение i18n."
          />
        </li>
      </ul>
    </section>
  );
};

export default Experience;
