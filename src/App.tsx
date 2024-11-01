import Header from "@components/header/header";
import styles from "./App.module.css";
import Main from "@components/main/main";
import Gradient from "@components/gradient/gradient";
import SmoothScroll from "@components/smooth-scroll/smooth-scroll";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SmoothScroll />
      <Gradient />
      <Main />
    </div>
  );
}

export default App;
