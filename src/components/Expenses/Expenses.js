import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './ExpenseItem.css'
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020')
    const filteredYearHandler = (dataFilter) => {
        setSelectedYear(dataFilter)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return (
            expense.date.getFullYear().toString() === selectedYear
        )
    })


    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onUpdateFilter={filteredYearHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    )
}

export default Expenses;