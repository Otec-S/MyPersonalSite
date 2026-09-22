import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./metrics.module.css";
import { useCountUp } from "../../utils/useCountUp";
import { certificates } from "@components/certificates/certificates.data";

interface MetricItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  labelKey: string;
}

const METRICS: MetricItem[] = [
  { id: "years", value: 5, prefix: ">", labelKey: "metrics.years" },
  { id: "content", value: 3, prefix: "×", labelKey: "metrics.content" },
  { id: "routine", value: 4, prefix: "×", labelKey: "metrics.routine" },
  {
    id: "certificates",
    value: certificates.length,
    labelKey: "metrics.certificates",
  },
].filter((item) => item.value > 0);

const MetricTile: FC<{ item: MetricItem }> = ({ item }) => {
  const { t } = useTranslation();
  const { ref, value } = useCountUp(item.value);
  const label = t(item.labelKey, { count: item.value });
  const finalText = `${item.prefix ?? ""}${item.value}${item.suffix ?? ""} ${label}`;

  return (
    <div className={styles.tile} aria-label={finalText}>
      <div className={styles.value} ref={ref} aria-hidden="true">
        {item.prefix && <span className={styles.affix}>{item.prefix}</span>}
        {value}
        {item.suffix && <span className={styles.affix}>{item.suffix}</span>}
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
