import React from 'react';
import styles from './AddBalance.module.css';
import { enqueueSnackbar } from 'notistack';

const AddBalance = ({setIsAddBal, setBalance}) => {
    const handleAddBal = (e) => {
        e.preventDefault();
        let bal = Number(e.target.elements['balance'].value);
        setBalance(b=>b+bal)
        setIsAddBal(false);
        enqueueSnackbar("Income added successfully", {variant:"success", anchorOrigin: {horizontal: "center", vertical: "bottom"}})
    }
    const handleCancel = () => {
        setIsAddBal(false);
    }
    return (
        <div className={styles.cont}>
            <div className={styles.card}>
                <h2 className={styles.heading}>Add Balance</h2>
                <form className={styles.form} onSubmit={handleAddBal}>
                    <input type="number" placeholder="Income Amount" className={styles.inp} name="balance"/>
                    <button type='submit' className={styles.addBtn}
                    >Add Balance</button>
                    <button className={styles.canBtn} onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default AddBalance;