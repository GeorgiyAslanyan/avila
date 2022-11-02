import React from "react";
import { Link } from "react-router-dom";
import s from "./Cart.module.scss";

const Cart = () => {
  return (
    <div className={s.emptyCart}>
      <h2>Ваша корзина пуста</h2>
      <Link to="/">
        <button>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default Cart;
