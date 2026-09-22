import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./metrics.module.css";
import { useCountUp } from "../../utils/useCountUp";

interface MetricItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  labelKey: string;
}

const METRICS: MetricItem[] = [
  { id: "years", value: 4, labelKey: "metrics.years" },
  { id: "content", value: 3, prefix: "×", labelKey: "metrics.content" },
  { id: "routine", value: 4, prefix: "×", labelKey: "metrics.routine" },
  { id: "certificates", value: 12, labelKey: "metrics.certificates" },
];

const MetricTile: FC<{ item: MetricItem }> = ({ item }) => {
  const { t } = useTranslation();
  const { ref, value } = useCountUp(item.value);
  const label = t(item.labelKey);
  const finalText = `${item.prefix ?? ""}${item.value}${item.suffix ?? ""} ${label}`;

  return (
    <div className={styles.tile} aria-label={finalText}>
      <div className={styles.value} ref={ref} aria-hidden="true">
        {item.prefix}
        {value}
        {item.suffix}
      </div>
      <div className={styles.label} aria-hidden="true">
        {label}
      </div>
    </div>
  );
};

const Metrics: FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.metrics}
      id="metrics"
      aria-label={t("metrics.ariaLabel")}
    >
      <div className={styles.grid}>
        {METRICS.map((item) => (
          <MetricTile key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Metrics;
