import Header from "@components/header/header";
import styles from "./App.module.css";
import Main from "@components/main/main";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
