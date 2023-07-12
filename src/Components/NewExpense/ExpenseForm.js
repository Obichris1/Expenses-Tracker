import react,{useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
     const [enteredTitle, setEnteredTitle] = useState('');
     const [enteredAmount, setEnteredAmount] = useState('');
     const [enteredDate, setEnteredDate] = useState('');
    
    // Alternative method

    //  const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enterdDate:''

    //  })

    const titleChangeHandler = (event) => {
        // Using multiple useState objects 
         setEnteredTitle(event.target.value);

 //  OR( using one use state oject)

               //setUserInput({
            // ...userInput,
            //  enteredTitle: event.target.value});
               
 // OR(Using one useStae object when we have a state update that depends on the previous state )

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
     
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
     
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
     
    }





      const submitHandler = (event) => {
        event.preventDefault();
        
       const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
       
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    }

      

    return(
         <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control"> 
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>

        <div className="new-expense__actions">
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
            

        </div>
    </form>
    )
}

export default ExpenseForm;