import React, { useState, useEffect } from "react";
import styles from "./Recent.module.css";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import travel from "../../assets/travel.svg";
import entertain from "../../assets/entertain.svg";
import food from "../../assets/food.svg";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Recent = ({ expenseData, setExpenseData, deleteEntry ,setIsEditEx, setEditId}) => {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [maxPage, setMaxPage] = useState(Math.ceil(expenseData.length / 3));
  const [viewExpense, setViewExpense] = useState([]);

  const handleDelete = (e) => {
    console.log(e.target.id);
    // deleteEntry(e.target.id[0]);
  };

  useEffect(() => {
    setViewExpense(
      expenseData.slice(start, Math.min(page * 3, expenseData.length))
    );
    setMaxPage(Math.ceil(expenseData.length / 3));
  }, [page, expenseData]);

  const increasePage = () => {
    if (page < maxPage) {
      setPage((p) => p + 1);
      setStart((s) => s + 3);
    }
  };

  const decreasePage = () => {
    if (page != 1) {
      setPage((p) => p - 1);
      setStart((s) => s - 3);
    }
  };

  return (
    <div>
      <h2 className={styles.heading}>Recent Transaction</h2>
      <div className={styles.cont}>
        {viewExpense.map((expense) => {
          return (
            <div className={styles.list} key={expense.id}>
              <div className={styles.listCont}>
                <div className={styles.lCont}>
                  <div className={styles.icon}>
                    {expense.category == "Entertainment" && (
                      <img src={entertain} />
                    )}
                    {expense.category == "Food" && <img src={food} />}
                    {expense.category == "Travel" && <img src={travel} />}
                  </div>
                  <div>
                    <p className={styles.title}>{expense.title}</p>
                    <p className={styles.dateInList}>{expense.date}</p>
                  </div>
                </div>

                <div className={styles.btns}>
                  <p className={styles.amount}>₹{expense.amount}</p>
                  <div
                    className={styles.dBtn}
                    id={`${expense.id}del`}
                    onClick={(e) => {
                      let n;
                      if (!e.target.id) n = e.target.parentElement.id;
                      else n = e.target.id;
                      deleteEntry(n[0]);
                    }}
                  >
                    <CancelOutlinedIcon
                      sx={{ color: "white" }}
                      id={`${expense.id}delL`}
                    />
                  </div>
                  <div
                    className={styles.editBtn}
                    id={`${expense.id}edit`}
                    onClick={(e) => {
                      let n;
                      if (!e.target.id) n = e.target.parentElement.id;
                      else n = e.target.id;
                      setEditId(Number(n[0]));
                      setIsEditEx(true);
                    }}
                  >
                    <EditOutlinedIcon
                      sx={{ color: "white" }}
                      id={`${expense.id}editL`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {}

        {expenseData.length ? (
          <div className={styles.btnCont}>
            <div className={styles.lArrow} onClick={decreasePage}>
              <KeyboardBackspaceRoundedIcon color={"action"} />
            </div>
            <div className={styles.counter}>{page}</div>
            <div className={styles.rArrow} onClick={increasePage}>
              <EastRoundedIcon color={"action"} />
            </div>
          </div>
        ) : (
          <div className={styles.addExCont}>
            <h2 className={styles.addEx}>Add expenses to view here</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recent;
