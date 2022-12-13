import React from 'react';
import {
    BuildingLibraryIcon,
  TableCellsIcon,
  WrenchScrewdriverIcon,
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
            <BuildingLibraryIcon width={20} /> Главная
          </li>
        </Link>
        <Link to="/adminpanel/posts">
          <li className={location === '/adminpanel/posts' ? s.active : ''}>
            <TableCellsIcon width={20} /> Товары
          </li>
        </Link>
        <Link to="/adminpanel/setting">
          <li className={location === '/adminpanel/setting' ? s.active : ''}>
            <WrenchScrewdriverIcon width={20} /> Настройки
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
