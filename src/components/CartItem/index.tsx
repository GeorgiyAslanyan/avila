import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useAppDispatch } from "../../redux/hooks/hook";
import { removeItem } from "../../redux/slices/cartSlice";
import s from "./CartItem.module.scss";

interface CartItemProps {
  id: number;
  title: string;
  img: string;
  price: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, title, img, price }) => {
  const dispatch = useAppDispatch()

  const onDeleteClick = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className={s.item}>
      <img src={img} alt="" />
      <div className={s.info}>
        <h3>{title}</h3>
        <p>{price} руб.</p>
      </div>
      <div className={s.delete}>
        <XMarkIcon onClick={onDeleteClick}/>
      </div>
    </div>
  );
};

export default CartItem;
