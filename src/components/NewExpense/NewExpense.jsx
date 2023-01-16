import React, { useState } from 'react'
import ExpensesForm from '../Expenses/ExpensesForm/ExpensesForm'
import './NewExpense.css'

export default function NewExpense(props) {
  const onSaveFormHandler = expense => {
    const newExpense = {
      ...expense,
      id: Math.round(Math.random() * 100),
    }

    props.onSendNewExpense(newExpense)
    setIsShown(false)
  }

  const [isShown, setIsShown] = useState(false)

  const onShowHandler = () => {
    setIsShown(true)
  }

  const onHideHandler = () => {
    setIsShown(false)
  }

  return (
    <div className="new-expense">
      {!isShown && <button onClick={onShowHandler} className='addBtn'>Add New Expense</button>}
      {isShown && <ExpensesForm onSaveForm={onSaveFormHandler} onCancel={onHideHandler} />}
    </div>
  )
}
