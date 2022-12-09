import React from "react";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import s from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <div className={s.main}>
        <Content />
      </div>

      <Footer />
    </>
  );
};

export default Main;
