import React from "react";
import s from "./Content.module.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.header}>
        <h2>Вся одежда</h2>
        <div className={s.search}>
          <MagnifyingGlassIcon />
          <input type="text" placeholder="поиск..." />
        </div>
      </div>
    </div>
  );
};

export default Content;
