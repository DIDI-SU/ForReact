import React, { useState } from "react";
import ExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredData) => {
    const expenseDate = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExenseData={saveExpenseDateHandler} />
    </div>
  );
};
export default NewExpense;
