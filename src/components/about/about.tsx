import { FC } from "react";
import styles from "./about.module.css";

const About: FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Обо мне</h2>
      </div>
      <p className={styles.text}>
        Мой путь в IT начался еще в Физмат лицее, где я изучал основы
        программирования на{" "}
        <a
          className={styles.link}
          href="https://ru.wikipedia.org/wiki/ZX_Spectrum"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="ZX-Spectrum (opens in a new tab)"
        >
          древнем ZX-Spectrum
        </a>
        . Кто-то еще помнит такой? :))
      </p>
      <p className={styles.text}>
        После этого успел пройти и{" "}
        <a
          className={styles.link}
          href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="CS50 (opens in a new tab)"
        >
          CS50 от Гарвардского университета
        </a>
        , и много курсов по{" "}
        <a
          className={styles.link}
          href="https://practicum.yandex.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Yandex Practicum (opens in a new tab)"
        >
          Web разработке
        </a>
        , фронту и даже{" "}
        <a
          className={styles.link}
          href="https://coda.io/@metalamp/education/web3-frontend-28"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Frontend for web3 blockchain (opens in a new tab)"
        >
          Frontend for web3 blockchain
        </a>
        .
      </p>
      <p className={styles.text}>
        Есть опыт в backend (Express.js с MongoDB), но в основном занимаюсь
        фронтендом. Сейчас специализируюсь на React и TypeScript.
      </p>
      <p className={styles.text}>
        В свободное время играю в{" "}
        <a
          className={styles.link}
          // FIXME: почему-то не работает такая ссылка
          href="https://t.me/@BG_clubbot"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Telegram bot (opens in a new tab)"
        >
          современные настольные игры
        </a>
        , бегаю на длинные дистанции и путешествую.
      </p>
      <p className={styles.text}>Буду рад сделать что-то вместе с вами!</p>
    </section>
  );
};

export default About;
