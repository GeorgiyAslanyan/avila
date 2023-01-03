import { TableCellsIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Card from '../Card'
import s from './Main.module.scss'

const navarr = [
  {title: 'Настройка товаров', description: 'Добавление, удаление и редактирование товаров', svg: <TableCellsIcon/>, color: '#ff4e4e'},
  {title: 'Настройка сайта', description: 'Настройка сайта', svg: <WrenchScrewdriverIcon/>, color: '#4e9aff'},
  {title: 'а', description: '', svg: <TableCellsIcon/>, color: '#c04eff'},
  {title: 'б', description: '', svg: <TableCellsIcon/>, color: '#3cc755'},
  {title: 'в', description: '', svg: <TableCellsIcon/>, color: '#c73cb6'},
  {title: 'г', description: '', svg: <TableCellsIcon />, color: '#ffad59'},
]

const AdminMain = () => {
  return (
    <div className={s.main}>
        {navarr.map(el => <Card {...el} key={el.title}/>)}
    </div>
  )
}

export default AdminMain