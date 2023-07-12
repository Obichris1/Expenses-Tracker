
import react,{useState} from 'react';
import Card from '../UI/Card.js'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../ExpensesFilter'
import './Expenses.css'
import ExpensesChart from './ExpensesChart.js';

 const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
 
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }  

  const filteredExpenses = props.items.filter(expense => 
 filteredYear === expense.date.getFullYear().toString())
 console.log(filteredYear);

    return(
      <div>
       

   <Card className='expenses'>
   <ExpensesFilter selected={filteredYear} onChangeFilter={ filterChangeHandler} /> 
     <ExpensesChart Expenses={filteredExpenses}/>
       {filteredExpenses.length === 0 ? 'No Expenses available' :filteredExpenses.map(expense => (
         <ExpenseItem key={expense.id} title = {expense.title} amount={expense.amount}
         date={expense.date} />
   ))} 
 
     
    </Card>
    </div>

    )
   

};
export default Expenses