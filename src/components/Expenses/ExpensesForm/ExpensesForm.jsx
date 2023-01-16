import React, { useState } from 'react'
import './ExpensesForm.css'

export default function ExpensesForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredPrice, setEnteredPrice] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value)
  }

  const priceChangeHandler = e => {
    setEnteredPrice(e.target.value)
  }

  const dateChangeHandler = e => {
    setEnteredDate(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    const newExpense = {
      title: enteredTitle,
      price: +enteredPrice,
      date: new Date(enteredDate)
    }
    // Sending Value to Parent
    props.onSaveForm(newExpense)
    // EmptyForm
    setEnteredTitle('')
    setEnteredPrice('')
    setEnteredDate('')
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title: </label>
            <input
              onChange={titleChangeHandler}
              value={enteredTitle}
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="price">Price: </label>
            <input
              onChange={priceChangeHandler}
              value={enteredPrice}
              type="number"
              min="0.01"
              step="0.01"
              name="price"
              id="price"
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date: </label>
            <input
              onChange={dateChangeHandler}
              value={enteredDate}
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              name="date"
              id="price"
            />
          </div>
          <div className="new-expense__btns">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  )
}
