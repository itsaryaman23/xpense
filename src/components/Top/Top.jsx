import React from "react";
import styles from "./Top.module.css";
const Top = () => {
  return (
    <div className={styles.cont}>
        <h2 className={styles.heading}>Top Expense</h2>
      <div className={styles.card}>
        <div>
          <div className={styles.textBox}>
            <span>Entertainment</span>
          </div>
          <div className={styles.barCont}>
            <div className={styles.bar+' '+styles.entBar}></div>
          </div>
        </div>
        <div>
          <div className={styles.textBox}>
            <span>Food</span>
          </div>
          <div className={styles.barCont}>
            <div className={styles.bar + " " + styles.foodBar}></div>
          </div>
        </div>
        <div>
          <div className={styles.textBox}>
            <span>Travel</span>
          </div>
          <div className={styles.barCont}>
            <div className={styles.bar + " " + styles.travel}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
