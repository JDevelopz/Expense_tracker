import './ExpenseList.css';
// Import ExpenseItem (data) for line 15. 
import ExpenseItem from './ExpenseItem';
//Recieve props from Expenses.js 
const ExpenseList = (props) => {

    if(props.expenses.length === 0 ) {
        return <h2 className='expenses-list__fallback'> No expenses found!</h2>
    }
    
    return (
    <u className='expenses-list'>
        {props.expenses.map((expense) => { 
            return (
          <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
            )
        })}
        </u>
        )
}

export default ExpenseList;