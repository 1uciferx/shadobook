import { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "../../styles/layoutstyle.module.css";
import Mobilefooter from "../mobilefooter";
import Headertest from "../../pages/headertest";

const Layout = ({ children, headerStyle }) => {
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />
      <div className={styles.allheader}>
        <Header handleOpen={handleOpen} headerStyle={headerStyle} />
        <Sidebar openClass={openClass} />
      </div>
      <main className="main">{children}</main>

      <div className={styles.allfooter}>
        <Footer />
      </div>

      <div className={styles.mobilefooter}>
        <Mobilefooter />
      </div>

      <div className={styles.mobileheader}>
        <Headertest />
      </div>
      <BackToTop />
    </>
  );
};

export default Layout;
