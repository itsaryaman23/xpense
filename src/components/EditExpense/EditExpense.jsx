import React from "react";
import styles from "./EditExpense.module.css";
import { enqueueSnackbar, SnackbarProvider, useSnackbar } from "notistack";

const EditExpense = ({
  setIsEditEx,
  setExpenseData,
  expenseData,
  id,
  setExpense,
  setBalance,
  balance,
  editId,
}) => {
  const handleCancel = () => {
    setIsEditEx(false);
  };

  const handleEditExpense = (e) => {
    e.preventDefault();
    setIsEditEx(false);

    let d = new Date(e.target.elements.date.value);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formatDate = d.toLocaleDateString("en-US", options);

    let arr = [...expenseData];

    let oldAmount = Number(arr[editId - 1].amount);
    let newAmount = Number(e.target.elements.amount.value);
    
    let flag = false;
    if (balance + oldAmount >= newAmount) flag = true;

    if (flag) {
      console.log("bal+oldam", balance + oldAmount);
      console.log("new amount", newAmount);
      setExpenseData(arr);
      setBalance((oldBalance) => oldBalance + oldAmount - newAmount);
      setExpense((oldExpense) => oldExpense - oldAmount + newAmount);
      arr[editId - 1].title = e.target.elements.title.value;
      arr[editId - 1].amount = Number(e.target.elements.amount.value);
      arr[editId - 1].category = e.target.elements.category.value;
      arr[editId - 1].date = formatDate;
      enqueueSnackbar("Expense edited successfully", {
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
        <h2 className={styles.heading}>Edit Expense</h2>
        <div>
          <form onSubmit={handleEditExpense}>
            <input
              onChange={(e) => {
                let s = e.target.value[0];
                if (Number(s))
                  enqueueSnackbar("Invalid Name", {
                    variant: "warning",
                    anchorOrigin: { vertical: "bottom", horizontal: "center" },
                    preventDuplicate: true,
                  });
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
              Edit Expense
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
export default EditExpense;
