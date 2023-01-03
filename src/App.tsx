import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AdminCreate from "./components/AdminComponents/AdminCreate";
import AdminMain from "./components/AdminComponents/AdminMain";
import AdminPosts from "./components/AdminComponents/AdminPosts";
import Header from "./components/Header";
import AdminPanel from "./pages/AdminPanel";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import Post from "./pages/Post";
import { useAppSelector } from "./redux/hooks/hook";

function App() {
  const { isAuth } = useAppSelector((state) => state.admin);

  let isAdminPage = useLocation().pathname.indexOf('adminpanel') === 1 ? true : false
  
  return (
    <div className="App">
      {!isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/goods/:id" element={<Post />} />
        <Route
          path="/adminpanel"
          element={!isAuth ? <LoginPage /> : <AdminPanel />}
        >
          <Route index element={<AdminPosts />} />
          <Route path='/adminpanel/create' element={<AdminCreate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
