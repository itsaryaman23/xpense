import React from "react";
import styles from "./ExpenseCard.module.css";
import { enqueueSnackbar, SnackbarProvider, useSnackbar } from "notistack";

const ExpenseCard = ({
  setIsAddEx,
  setExpenseData,
  expenseData,
  id,
  setId,
  setExpense,
  setBalance,
  balance,
}) => {
  const handleCancel = () => {
    setIsAddEx(false);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    setIsAddEx(false);
    setId((i) => i + 1);

    let d = new Date(e.target.elements.date.value);
  

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    
    const formatDate = d.toLocaleDateString('en-US', options);

    let newExpense = {
      id: id,
      title: e.target.elements.title.value,
      amount: e.target.elements.amount.value,
      category: e.target.elements.category.value,
      date: formatDate
    };
    if (balance >= e.target.elements.amount.value) {
      setExpenseData([...expenseData, newExpense]);
      setExpense((ex) => ex + Number(e.target.elements.amount.value));
      setBalance((bal) => bal - Number(e.target.elements.amount.value));
      enqueueSnackbar("Expense added successfully", {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "bottom" },
      });
    } else {
      enqueueSnackbar("Not enough balance", {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "bottom" },
      });
    }
  };

  return (
    <div className={styles.cont}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Add Expense</h2>
        <div>
          <form onSubmit={handleAddExpense}>
            <input
            onChange={(e)=>{
              let s = e.target.value[0];
                if(Number(s))
                  enqueueSnackbar('Invalid Name', {variant:"warning", anchorOrigin:{vertical: "bottom", horizontal:"center"}, preventDuplicate: true});
            }}
              type="text"
              className={styles.field + " " + styles.inputs}
              placeholder="Title"
              name="title"
              required
            />

            <input
              type="number"
              name="amount"
              className={styles.field + " " + styles.inputs}
              placeholder="Price"
              required
            />
            <select
              name="category"
              id="category"
              className={styles.field + " " + styles.inputs}
              required
            >
              <option value="Select category" disabled selected>
                Select Category
              </option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              type="date"
              name="date"
              className={styles.field + " " + styles.inputs}
              placeholder="dd/mm/yyyy"
              required
            />
            <button
              type="submit"
              className={styles.field + " " + styles.subBtn}
            >
              Add Expense
            </button>
            <button
              type="cancel"
              className={styles.field + " " + styles.canBtn}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ExpenseCard;
