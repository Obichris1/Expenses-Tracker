import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses.js';
import NewExpense from './Components/NewExpense/NewExpense.js';

function App() {

   
  const [expenses,setExpenses] =  useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    
  ])


 const addExpenseHandler = (expense) => {
   
    // setExpenses([...expenses, expense])     // instead of this use the special function form if the state to be updated depends on the previous 
            // OR
  setExpenses((prevExpenses) =>{
     return[expense, ...prevExpenses];  })        // updatimg our state based on the previous snap shot of that same state                                                                                                                   // This and te method above yields the same result just that it is better practice
};


  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>  
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
