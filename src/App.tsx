import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Conteúdo...</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
