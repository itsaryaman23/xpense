import React from "react";
import styles from "./ExpenseTracker.module.css";
import Pie from "../Pie/Pie";


const Expense = ({ balance, expense, setIsAddBal, setIsAddEx }) => {
  const handleAddBal = () => {
    setIsAddBal(true);
  }
  const handleAddExpense = () => {
    setIsAddEx(true);
  }
  return (
    
    <div class={styles.wrap}>
      <h2 className={styles.heading}>Expense Tracker</h2>

      <div className={styles.cont}>
        <div className={styles.card}>
          <p className={styles.cardHeading}>
            Walet Balance: <span className={styles.balance}>₹{balance}</span>
          </p>

          <button className={styles.cardBtn + " " + styles.incomeBtn} onClick={handleAddBal}>
            + Add Income
          </button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>
            Expense: <span className={styles.expense}>₹{expense}</span>
          </h2>
          <button className={styles.cardBtn + " " + styles.expenseBtn} onClick={handleAddExpense}>
            + Add Expense
          </button>
        </div>
        <div className={styles.pieCont}>
          <Pie />
          <div className={styles.legend}>
            <div className={styles.foodInd}></div>
            <span className={styles.catTitle}>Hello</span>

            <div className={styles.entertainmentInd}></div>
            <span className={styles.catTitle}>Entertainment</span>
            <div className={styles.travelInd}></div>
            <span className={styles.catTitle}>Travel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expense;
