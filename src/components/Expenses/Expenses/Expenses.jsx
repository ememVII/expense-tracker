import React, { useState } from 'react'
import Card from '../../UI/Card/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from '../ExpensesList/ExpensesList'
import './Expenses.css'
import ExpensesChart from './../ExpensesChart/ExpensesChart';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021')

  const onFilterYear = filteredYear => {
    setFilteredYear(filteredYear)
  }
  
  const filteredExpenses = props.expenses.filter(
    expense =>
      expense.date.getFullYear().toString() === filteredYear
  )
  
  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesFilter selected={filteredYear} onFilterYear={onFilterYear} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}
