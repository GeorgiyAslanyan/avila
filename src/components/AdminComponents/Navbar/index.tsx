import React from 'react';
import {
    BuildingLibraryIcon,
  TableCellsIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <ul>
        <Link to="/adminpanel">
          <li>
            <BuildingLibraryIcon width={20} /> Главная
          </li>
        </Link>
        <Link to="/adminpanel/posts">
          <li>
            <TableCellsIcon width={20} /> Товары
          </li>
        </Link>
        <Link to="/adminpanel/setting">
          <li>
            <WrenchScrewdriverIcon width={20} /> Настройки
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
