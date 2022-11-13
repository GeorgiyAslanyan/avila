import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hook";
import CartItem from "../CartItem";
import s from "./CartPopup.module.scss";

interface CartPopupProps {
  setShow: (b: boolean) => void;
  show: boolean;
}


const CartPopup: React.FC<CartPopupProps> = ({ setShow, show }) => {
  const items = useAppSelector(state => state.cart.items)
  
  return (
    <div className={show ? s.cartPopupOpen : s.cartPopupClose}>
      <div onClick={() => setShow(false)} className={s.blur} />
      <div className={s.menu}>
        <h2>Ваша корзина</h2>
        <div className={s.items}>
          {items.slice(0, 4).map((el) => (
            <CartItem key={el.id} {...el} />
          ))}
        </div>
        <div className={s.buttons}>
          <Link onClick={() => setShow(false)} to={"/cart"}>
            <button className={s.greenBtn}>Перейти к оформлению заказа</button>
          </Link>
          <button onClick={() => setShow(false)} className={s.redBtn}>Закрыть окно</button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
