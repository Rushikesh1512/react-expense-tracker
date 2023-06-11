import { List } from 'components/List/List'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ExpenseList() {
  const expenseList=  useSelector((store)=>store.EXPENSE.expenselist);
  return (
    < List items={expenseList}/>
  )
}
