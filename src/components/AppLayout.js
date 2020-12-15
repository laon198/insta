import React from "react";
import Header from "./Header";
import Footer from "./instagram/Footer";
import styles from "./AppLayout.module.scss";

function AppLayout({ children }) {
  return (
    <div className={styles.app}>
      <div id={styles.header}>
        <div className={styles.container}>
          <Header></Header>
        </div>
      </div>
      <div id={styles.contents}>
        <div className={styles.container}>{children}</div>
      </div>
      <div id={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer}>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
