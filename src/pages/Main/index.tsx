import React from 'react'
import Categories from '../../components/Categories'
import Content from '../../components/Content'
import s from './Main.module.scss'

const Main = () => {
  return (
    <div className={s.main}>
        <Categories />
        <Content />
    </div>
  )
}

export default Main