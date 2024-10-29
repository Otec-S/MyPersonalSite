import Header from "@components/header/header";
import styles from "./App.module.css";
import Main from "@components/main/main";
import Gradient from "@components/gradient/gradient";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Gradient />
      <Main />
    </div>
  );
}

export default App;
