import React, { useState } from "react";
import styles from "./styles/ExpenseForm.module.css";  // ✅ Import CSS Module

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    addExpense({ name, amount: parseFloat(amount) });
    setName("");
    setAmount("");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className={styles.button} type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
