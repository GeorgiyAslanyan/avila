import React from "react";
import s from "./Categories.module.scss";
import jeans from "../../assets/jeans.png";
import all from "../../assets/all.png";
import shoes from "../../assets/shoes.png";
import acs from "../../assets/acs.png";
import sweater from "../../assets/sweater.png";
import tshorts from "../../assets/tshorts.png";

const Categories = () => {
  return (
    <div className={s.categories}>
      <div className={s.left}>
        <img src={jeans} alt="" />
      </div>
      <div className={s.right}>
        <div className={s.top}>
          <div className={s.first}>
            <img src={shoes} alt="" />
          </div>
          <div className={s.second}>
            <img src={acs} alt="" />
          </div>
          <div className={s.third}>
            <img src={tshorts} alt="" />
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.first}>
            <img src={all} alt="" />
          </div>
          <div className={s.second}>
            <img src={sweater} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
