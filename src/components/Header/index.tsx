import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className={s.headerBorder}>
      <div className={s.header}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
          <div className={s.text}>
            <h1>AVILA</h1>
            <p>Интернет магазин одежды</p>
          </div>
        </div>
        <div className={s.nav}>
          <div className={s.cart}>
            <ShoppingBagIcon />
            <p>1260 руб.</p>
          </div>
          <div className={s.follow}>
            <HeartIcon />
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
