import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormvisible, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const formVisibilityHandler = (isVisible) => {
    setFormVisibility(isVisible);
  };

  if (isFormvisible) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          visible={formVisibilityHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={setFormVisibility}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
