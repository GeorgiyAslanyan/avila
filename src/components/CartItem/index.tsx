import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import {
  removeItem,
  setCount,
  setPrice,
  setSize,
} from "../../redux/slices/cartSlice";
import s from "./CartItem.module.scss";

interface CartItemProps {
  cartId: number
  id: number;
  title: string;
  img: string;
  price: number;
  size: number;
  count: number;
}

const CartItem: React.FC<CartItemProps> = ({
  cartId,
  id,
  title,
  img,
  price,
  size,
  count,
}) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.items.itemsArr)
  const itemPrice = items.filter(item => item.id === id)[0].price

  const onMinusClick = () => {
    count > 1 &&
      dispatch(setCount({ id: cartId, count: count - 1 })) &&
      dispatch(setPrice({ id: cartId, price: itemPrice * (count - 1) }));
  };

  const onPlusClick = () => {
    dispatch(setCount({ id: cartId, count: count + 1 }));
    dispatch(setPrice({ id: cartId, price: itemPrice * (count + 1) }));
  };

  const onDeleteClick = () => {
    dispatch(removeItem(cartId));
  };

  return (
    <div className={s.item}>
      <img src={img} alt="" />
      <div className={s.info}>
        <h3>{title}</h3>
        <div className={s.sizes}>
          {["xs", "s", "m", "l", "xl", "xxl", "xxxl", "4xl"].map(
            (el, index) => (
              <button
                key={index}
                onClick={() => dispatch(setSize({ id: cartId, size: index }))}
                className={size === index ? s.buttonActive : s.button}
              >
                {el}
              </button>
            )
          )}
        </div>
        <div className={s.input}>
          <div onClick={onMinusClick}>-</div>
          <div>{count}</div>
          <div onClick={onPlusClick}>+</div>
        </div>
        <p>{price} руб.</p>
      </div>
      <div className={s.delete}>
        <XMarkIcon onClick={onDeleteClick} />
      </div>
    </div>
  );
};

export default CartItem;
