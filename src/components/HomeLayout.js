import React from "react";
import styles from "./HomeLayout.module.scss";

function HomeLayout({ children, SideBar }) {
  return (
    <div className={styles.contents}>
      <div className={styles.PostList}>{children}</div>
      <div className={styles.SideBar}>{SideBar}</div>
    </div>
  );
}

export default HomeLayout;
