import React from 'react'
import ExpensesItem from '../ExpensesItem/ExpensesItem'
import './ExpensesList.css'

export default function ExpensesList(props) {

  if(props.expenses.length === 0) {
    return <div className='expenses-list__not'>There is No Expenses !!</div>
  }
  
  return (
    <ul className="expenses-list">
      {props.expenses.map(expense => (
        <ExpensesItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
          onDeleteBtn={props.onDeleteSubmit}
        />
      ))}
    </ul>
  )
}
