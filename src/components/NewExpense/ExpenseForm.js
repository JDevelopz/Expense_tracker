import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // Use states for title set default to empty string
  const [enteredTitle, setEnteredTitle] = useState("");
  // Use state for amount set default to empty string
  const [enteredAmount, setEnteredAmount] = useState("");
  // Use state for date set default to empty string
  const [enteredDate, setEnteredDate] = useState("");
  // Other option 
//   const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
//   })
// OnClick handler set state of enteredTitle to the target.value LINE 66
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    //Other option to change state
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value,
    // })
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         enteredTitle: e.target.value,
    //     }
    // })
  };
  // OnClick handler set state of enteredAmount to the target.value LINE 70
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  // OnClick handler set state of enteredDate to the target.value LINE 74
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
// Onclick submit handler to collect the data from the other handlers thought the states. LINE 63
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredTitle);
    // console.log(enteredAmount);
    // console.log(enteredDate);
    // Store collected data into an array. LINE 6-10
    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
    }
    // Pass the array with data forward to NewExpense.js thought props.
    props.onSaveExpenseData(expenseData);
     // Set title, amount, date back to an empty string. 
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  // return the JSX txt.
  return (
    <form onSubmit={submitHandler}>
      <div className='className="new-expense__controls'>
        <div className="new-expense__control">
          <label>Expense</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate} />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
