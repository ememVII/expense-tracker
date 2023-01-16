import React from 'react'
import Card from '../../UI/Card/Card'
import ExpensesDate from '../ExpensesDate/ExpensesDate'
import './ExpensesItem.css'

export default function (props) {
  
  return (
    <li>
    <Card className='expense-item'>
        <ExpensesDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.price} $</div>
        </div>
    </Card>
    </li>
  )
}
