import React, { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <ExpenseDate date={props.date} />
        </div>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
