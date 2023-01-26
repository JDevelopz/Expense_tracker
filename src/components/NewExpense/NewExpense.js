import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    // set state for Editing the ExpenseForm Component.
   const [isEditing, setIsEditing] = useState(false);

   // After filling in the form we collect the data and pass it to the Expense.js component. LINE 34
    const onSaveExpenseDataHandler = (enteredExpenseData) => { 
        const expenseData = {
            id: 'e' + Math.floor(Math.random() * 2000).toString(),
            ...enteredExpenseData,
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);

    };
    // Set is editing to true so the form is visible. 
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    //Set isEditing to false so the form is hidden. 
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    // JSX Render the button and the form. If the button is visable the form is hidden. Visa verse. 
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/> }
        </div>
    )

}

export default NewExpense;