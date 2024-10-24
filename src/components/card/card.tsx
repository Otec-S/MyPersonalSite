import { FC, ReactElement } from "react";
import styles from "./card.module.css";
import { ArrowLink } from "@assets/icons";
import StackItem from "@components/stack-item/stack-item";

interface Props {
  header: string;
  title: string;
  description: string;
  stack?: string[];
}

const Card: FC<Props> = ({ header, title, description }): ReactElement => {
  return (
    <div className={styles.card}>
      <span className={styles.activeCard}></span>
      <header className={styles.header}>{header}</header>
      <div className={styles.body}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.arrowLink}>
            <ArrowLink />
          </span>
        </h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.stack}>
          <li>
            <StackItem itemTitle="TypeScript" />
          </li>
          <li>
            <StackItem itemTitle="React" />
          </li>
          <li>
            <StackItem itemTitle="Redux" />
          </li>
          <li>
            <StackItem itemTitle="Ant Design" />
          </li>
          <li>
            <StackItem itemTitle="Recharts" />
          </li>
          <li>
            <StackItem itemTitle="Jest" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
