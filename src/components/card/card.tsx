import { FC, ReactElement } from "react";
import styles from "./card.module.css";
import { ArrowLink } from "@assets/icons";
import StackItem from "@components/stack-item/stack-item";

interface Props {
  header: string;
  title: string;
  description: ReactElement;
  stack: string[];
}

const Card: FC<Props> = ({
  header,
  title,
  description,
  stack,
}): ReactElement => {
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
          {stack.map((technology, index) => (
            <li key={index}>
              <StackItem itemTitle={technology} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
