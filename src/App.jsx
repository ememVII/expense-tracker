import { useEffect, useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import Footer from './components/UI/Footer/Footer'

// StaticData
const staticData = [
  {
    id: 0,
    title: 'Labtop',
    price: '399.99',
    date : new Date('2019-07-25')
  },
  {
    id: 1,
    title: 'PC Monitor',
    price: '139.99',
    date : new Date('2021-03-19')
  },
  {
    id: 2,
    title: 'SSD',
    price: '78.99',
    date : new Date('2021-08-05')
  },
  {
    id: 3,
    title: 'Mouse',
    price: '18.99',
    date : new Date('2021-10-15')
  },
  {
    id: 4,
    title: 'Samsung Tv',
    price: '639.99',
    date : new Date('2022-09-15')
  },
  {
    id: 5,
    title: 'Sweatshirt',
    price: '74.99',
    date : new Date('2022-10-07')
  }
]

function App() {
  
  const [expenses, setExpenses] = useState(staticData)
  
  const addNewExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense,...prevExpenses])
  }

  // Handler Delete Expense
  const onDeleteHandler = (expenseID) => {
    setExpenses((prevExpenses) => {
      let deleteFilter = prevExpenses.filter((expense) => expense.id !== expenseID)
      return deleteFilter
    })
  }

  return (
    <>
    <NewExpense onSendNewExpense={addNewExpense}/>
    <Expenses expenses={expenses} onDelete={onDeleteHandler}/>
    <Footer/>
    </>
  )
}

export default App
