import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AdminPanel from './pages/AdminPanel';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';
import Post from './pages/Post';
import { useAppSelector } from './redux/hooks/hook';

function App() {
  const {isAdminPage, isAuth} = useAppSelector((state) => state.admin)

  return (
    <div className="App">
      {!isAdminPage && <Header />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/goods/:id' element={<Post />} />
        <Route path='/adminpanel' element={!isAuth ? <LoginPage /> : <AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
