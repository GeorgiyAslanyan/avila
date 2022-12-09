import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { login } from "../../redux/slices/adminSlice";
import s from "./LoginPage.module.scss";

const LoginPage = () => {
  const [loginValue, setLoginValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [showErr, setShowErr] = React.useState(false)
  const dispatch = useAppDispatch();

  const onLoginClick = () => {
    loginValue.toLowerCase() === "admin".toLowerCase() &&
      passwordValue.toLowerCase() === "admin".toLowerCase() ?
      dispatch(login())
      : setShowErr(true)
  };

  return (
    <div className={s.loginPage}>
      <div className={s.loginPanel}>
        <h2>Вход в панель администратора</h2>
        <input
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          placeholder="Введите логин"
        />
        <input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          placeholder="Введите пароль"
        />
        <p className={showErr ? s.errorShow : s.error}>Вы ввели неправильные данные</p>
        <div className={s.buttons}>
          <button onClick={onLoginClick} className={s.login}>
            Войти
          </button>
          <Link to="/">
            <button className={s.back}>Вернуться к покупкам</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
