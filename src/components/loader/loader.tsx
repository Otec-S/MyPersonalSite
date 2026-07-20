import styles from "./loader.module.css";
import favicon from "./favicon-data-uri";

function Loader() {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <div className={styles.spinnerWrap}>
        <svg className={styles.spinner} viewBox="0 0 50 50">
          <circle
            className={styles.spinnerTrack}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="3"
          />
          <circle
            className={styles.spinnerArc}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="3"
          />
        </svg>
        <span
          className={styles.logo}
          style={{ maskImage: `url(${favicon})`, WebkitMaskImage: `url(${favicon})` }}
          aria-hidden="true"
        />
      </div>
      <span className={styles.srOnly}>Loading…</span>
    </div>
  );
}

export default Loader;
