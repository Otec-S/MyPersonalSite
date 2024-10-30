import { FC } from "react";
import styles from "./stack-item.module.css";

interface Props {
  itemTitle: string;
}

const StackItem: FC<Props> = ({ itemTitle }) => {
  return (
    <div className={styles.item} aria-label="Technology used">
      {itemTitle}
    </div>
  );
};

export default StackItem;
