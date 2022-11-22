import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { ShoppingBagIcon, HeartIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CartPopup from "../CartPopup";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { setSearch } from "../../redux/slices/itemsSlice";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const count = useAppSelector((state) => state.cart.count);
  const search = useAppSelector((state) => state.items.sort.search);
  const dispatch = useAppDispatch()

  return (
    <div className={s.headerBorder}>
      <CartPopup show={show} setShow={setShow} />

      <div className={s.header}>
        <Link to="/">
          <div className={s.logo}>
            <div className={s.text}>
              <CursorArrowRaysIcon className={s.click} />
              <h1>AVILA</h1>
              <p>Интернет магазин одежды</p>
            </div>
          </div>
        </Link>
        <div className={s.search}>
          <input value={search ? search : ''} onChange={e => dispatch(setSearch(e.target.value))} type="text" placeholder="Поиск по товарам"/>
          <XMarkIcon onClick={() => dispatch(setSearch(undefined))}/>
        </div>
        <div className={s.nav}>
          <div onClick={() => setShow(true)} className={s.cart}>
            <ShoppingBagIcon />
            <p>{count}</p>
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
