
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/AdminComponents/Navbar";
import s from "./AdminPanel.module.scss";

const AdminPanel = () => {
  return (
    <div className={s.adminPanel}>
      <Navbar />
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
