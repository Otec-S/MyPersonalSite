import { FC } from "react";
import styles from "./about.module.css";

const About: FC = () => {
  return (
    <section className={styles.about}>
      {/* TODO: заголовок?  */}
      <p className={styles.text}>
        Мой путь в IT начался еще в Физмат лицее, где я изучал основы
        программирования на древнем ZX-Spectrum. Кто-то еще помнит такой? После
        этого успел пройти и CS50 от Гарвардского университета, и много курсов
        по Web разработке, фронту и даже web3 blockchain. Есть опыт в backend
        (Express.js с MongoDB), но в основном занимаюсь фронтендом. Сейчас
        специализируюсь на React и TypeScript. В свободное время играю в
        современные настольные игры, бегаю на длинные дистанции и путешествую.
        Буду рад сотрудничеству с вами!
      </p>
    </section>
  );
};

export default About;
