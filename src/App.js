import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import Recent from "./components/Recent/Recent";
import AddBalance from "./components/AddBalance/AddBalance";
import ExpenseCard from "./components/ExpenseCard/ExpenseCard";
import Top from "./components/Top/Top";
import { SnackbarProvider, useSnackbar } from "notistack";
import EditExpense from "./components/EditExpense/EditExpense";

function App() {
  const [balance, setBalance] = useState(5000);
  const [expense, setExpense] = useState(0);
  const [isAddBal, setIsAddBal] = useState(false);
  const [isAddEx, setIsAddEx] = useState(false);
  const [isEditEx, setIsEditEx] = useState(false);
  const [editId, setEditId] = useState(1);
  const [expenseData, setExpenseData] = useState([
    {
      amount: "234",
      category: "Entertainment",
      date: "November 14, 2024",
      id: 1,
      title: "one",
    },
    {
      amount: "234",
      category: "Entertainment",
      date: "November 14, 2024",
      id: 2,
      title: "two",
    },
    {
      amount: "234",
      category: "Entertainment",
      date: "November 14, 2024",
      id: 3,
      title: "three",
    },
    {
      amount: "234",
      category: "Entertainment",
      date: "November 14, 2024",
      id: 4,
      title: "four",
    },
    {
      amount: "234",
      category: "Entertainment",
      date: "November 14, 2024",
      id: 5,
      title: "five",
    },
    {
      amount: "234",
      category: "Entertainment",
      date: "November 14, 2024",
      id: 6,
      title: "six",
    },
    {
      amount: "234",
      category: "Entertainment",
      date: "November 14, 2024",
      id: 7,
      title: "seven",
    },
    {
      amount: "234",
      category: "Entertainment",
      date: "November 14, 2024",
      id: 8,
      title: "eight",
    }
  ]);
  const [id, setId] = useState(1);

  const deleteEntry = (id) => {
    let arr = [...expenseData];
    console.log(arr);
    arr = arr.filter((e) => {
      if (e.id != id) return e;
    });
    setExpenseData(arr);
  };

  return (
    <div className="App">
      <SnackbarProvider>
        <ExpenseTracker
          setIsAddBal={setIsAddBal}
          setIsAddEx={setIsAddEx}
          balance={balance}
          expense={expense}
        />
        <Recent
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          deleteEntry={deleteEntry}
          setIsEditEx={setIsEditEx}
          setEditId={setEditId}
        />
        <Top />
        {isAddBal && (
          <AddBalance setIsAddBal={setIsAddBal} setBalance={setBalance} />
        )}
        {isEditEx && (
          <EditExpense
            setIsEditEx={setIsEditEx}
            editId={editId}
            expenseData={expenseData}
            setExpenseData={setExpenseData}
            setExpense={setExpense}
            balance={balance}
            setBalance={setBalance}
            id={id}
            setId={setId}
          />
        )}
        {isAddEx && (
          <ExpenseCard
            setIsAddEx={setIsAddEx}
            setExpenseData={setExpenseData}
            setExpense={setExpense}
            expenseData={expenseData}
            balance={balance}
            setBalance={setBalance}
            id={id}
            setId={setId}
          />
        )}
      </SnackbarProvider>
    </div>
  );
}

export default App;
