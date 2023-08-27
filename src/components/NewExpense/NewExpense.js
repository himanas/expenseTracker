import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isViewBtn, setisViewBtn] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisViewBtn(true);
  };

  return (
    <div className="new-expense">
      {isViewBtn && (
        <button onClick={() => setisViewBtn(false)}>Add New Expeses</button>
      )}
      {!isViewBtn && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setisViewBtn(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
