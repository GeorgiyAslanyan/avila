import { TableCellsIcon } from '@heroicons/react/24/outline'
import React from 'react'
import s from './Card.module.scss'

interface Card {
    title: string,
    description: string,
    svg: any
}

const Card:React.FC<Card> = ({title, description, svg}) => {
  return (
    <div className={s.card}>
        <div className={s.icon}>
            {svg}
        </div>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card