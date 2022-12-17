import { TableCellsIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Card from '../Card'
import s from './Main.module.scss'

const navarr = [
  {title: 'Настройка товаров', description: 'Добавление, удаление и редактирование товаров', svg: <TableCellsIcon/>},
  {title: 'Настройка сайта', description: 'Настройка сайта', svg: <WrenchScrewdriverIcon/>},
  {title: 'а', description: '', svg: <TableCellsIcon/>},
  {title: 'б', description: '', svg: <TableCellsIcon/>},
  {title: 'в', description: '', svg: <TableCellsIcon/>},
  {title: 'г', description: '', svg: <TableCellsIcon/>},
]

const AdminMain = () => {
  return (
    <div className={s.main}>
        {navarr.map(el => <Card {...el} key={el.title}/>)}
    </div>
  )
}

export default AdminMain