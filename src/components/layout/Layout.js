import { Fragment } from "react";
import Header from "./Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{children}</main>
    </Fragment>
  );
};

export default Layout;
