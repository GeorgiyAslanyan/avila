import React from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.footer}>
        <Link to='/adminpanel'>
            <p>Войти в панель администратора</p>
        </Link>
    </div>
  )
}

export default Footer