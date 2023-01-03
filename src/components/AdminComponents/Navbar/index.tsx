import React from 'react';
import {
  CogIcon,
  PlusCircleIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import s from "./Navbar.module.scss";

const Navbar = () => {
  const location = useLocation().pathname
  
  return (
    <div className={s.navbar}>
      <ul>
        <Link to="/adminpanel">
          <li className={location === '/adminpanel' ? s.active : ''}>
            <TableCellsIcon width={20} /> Изменить товары
          </li>
        </Link>
        <Link to="/adminpanel/create">
          <li className={location === '/adminpanel/create' ? s.active : ''}>
            <PlusCircleIcon width={20} /> Добавить товар
          </li>
        </Link>
        <Link to="/adminpanel/setting">
          <li className={location === '/adminpanel/setting' ? s.active : ''}>
            <CogIcon width={20}/> Настройки
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
