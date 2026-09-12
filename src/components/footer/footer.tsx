import { FC } from "react";
import styles from "./footer.module.css";

// const BADGE_URL =
//   "https://hits.sh/footer.sergeygrigorash.com.svg" +
//   "?style=flat-square&label=visits&color=48bf91&labelColor=0f172a";

// const COUNT_OFFSET = 5000;

// const bumpCount = (svg: string): string =>
//   svg.replace(/(<text[^>]*>)([\d,]+)(<\/text>)/g, (_match, open, digits, close) => {
//     const hasSeparators = digits.includes(",");
//     const value = Number(digits.replace(/,/g, "")) + COUNT_OFFSET;
//     const formatted = hasSeparators ? value.toLocaleString("en-US") : String(value);

//     return `${open}${formatted}${close}`;
//   });

const Footer: FC = () => {
  // const [badgeSvg, setBadgeSvg] = useState<string | null>(null);

  // useEffect(() => {
  //   let cancelled = false;

  //   fetch(BADGE_URL)
  //     .then((res) => res.text())
  //     .then((svg) => {
  //       if (!cancelled) {
  //         setBadgeSvg(bumpCount(svg));
  //       }
  //     })
  //     .catch(() => {});

  //   return () => {
  //     cancelled = true;
  //   };
  // }, []);

  return (
    <footer className={styles.footer}>
      {/* {badgeSvg ? (
        <span
          role="img"
          aria-label="visitor count"
          dangerouslySetInnerHTML={{ __html: badgeSvg }}
        />
      ) : (
        <img src={BADGE_URL} alt="visitor count" height={20} />
      )} */}
    </footer>
  );
};

export default Footer;
