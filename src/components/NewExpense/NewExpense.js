import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        setShowForm(false)

        props.onAddExpense(expenseData)
    }

    const showFormHandler = () => {
        return setShowForm(true)
    }

    const stopEditingHandler = () => {
        return setShowForm(false)
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={showFormHandler}>Add New Expenses</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;