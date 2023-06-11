import React from 'react';
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
  <p>No expenses found</p>;
  if (props.items.length === 1) {
    props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
    return <h2>Please add more expenses</h2>;
  }
  if (props.items.length > 0) {
    props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  if (props.items.length === 0) {
    return <h2> Found no expenses</h2>;
  }
  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};
export default ExpensesList;
