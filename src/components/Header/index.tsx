import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CartPopup from "../CartPopup";

const Header = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className={s.headerBorder}>
      <CartPopup show={show} setShow={setShow}/>

      <div className={s.header}>
        <Link to="/">
          <div className={s.logo}>
            <img src={logo} alt="logo" />
            <div className={s.text}>
              <h1>AVILA</h1>
              <p>Интернет магазин одежды</p>
            </div>
          </div>
        </Link>
        <div className={s.nav}>
          <div onClick={() => setShow(true)} className={s.cart}>
            <ShoppingBagIcon />
            <p>1260 руб.</p>
          </div>
          <Link to="/follow">
            <div className={s.follow}>
              <HeartIcon />
              <p>4</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
