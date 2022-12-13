import {
  ArrowRightOnRectangleIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/AdminComponents/Navbar";
import { useAppDispatch } from "../../redux/hooks/hook";
import { logout } from "../../redux/slices/adminSlice";
import s from "./AdminPanel.module.scss";

const AdminPanel = () => {
  const dispatch = useAppDispatch();

  React.useLayoutEffect(() => {
    window.scrollTo({top: 0})
  }, [])
  
  return (
    <>
      <div className={s.adminHeader}>
        <h1>Панель администратора</h1>
        <div className={s.buttons}>
          <Link to={"/"}>
            <button>
              <ComputerDesktopIcon />
            </button>
          </Link>
          <Link to={"/"}>
            <button onClick={() => dispatch(logout())}>
              <ArrowRightOnRectangleIcon color="red" />
            </button>
          </Link>
        </div>
      </div>
      <div className={s.adminPanel}>
        <Navbar />
        <div className={s.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
