import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

import "./Expenses.css";

function Expenses(props) {
  // Set state for expense year. Default is 2022.
  const [expenseYear, setExpenseYear] = useState("2023");
  // Recieve data from ExpenseFilter.js as ExpenseYear LINE 24
  const yearOfExpense = (expenseYear) => {
    // console.log('Recieved filtered data in Expenses.js');
    setExpenseYear(expenseYear);
    // console.log(expenseYear);
  };

  // Filter the year. Loop throught the expenses and return the expenses where the year is equal to selected year.
  const filteredYear = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(expenseYear);
  });
  // Return JSX
  return (
    <Card className="expenses">
      <ExpenseFilter value={expenseYear} onChangedFilter={yearOfExpense} />
      <ExpenseChart expenses={filteredYear} />
      <ExpenseList expenses={filteredYear} />
    </Card>
  );
}

export default Expenses;

// Old style
/* <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />

        */
