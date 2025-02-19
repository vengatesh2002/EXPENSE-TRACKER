import React from "react";
import styles from "./styles/ExpenseList.module.css";  

const ExpenseList = ({ expenses }) => {
  return (
    <div className={styles.listContainer}>
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className={styles.listItem}>
              {expense.name} - ₹{expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
