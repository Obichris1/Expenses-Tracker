import {React,useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css' 
import Card from "../UI/Card";

const NewExpense = (props) => {

    const [showExpenseForm, setShowExpenseForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString
        };
        props.onAddExpense(expenseData)
        setShowExpenseForm(false);      // close the form when the form has been submitted
    }




    const expenseFormToggler = () => {    //  shows the form when the add new expense button is clicked
        setShowExpenseForm(true)
    }


    const cancelHandler = () => {         // handler responsible for the close button(removes the form)
        setShowExpenseForm(false);
    }
       
    return(
        
    <div className="new-expense">
                   
        {showExpenseForm === false &&  <button onClick={expenseFormToggler}>Add New Expense</button>}   
        {showExpenseForm === true &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/> }
              
    </div>
    )
}

export default NewExpense;