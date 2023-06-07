import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const [amount, setAmount] = useState(props.amount);

  const hundredHandler = () => {
    setAmount(100);
    console.log(amount);
  };

  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  };
  // const deleteHandler = () => {
  //   console.log('deleted');
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={hundredHandler}>Add 100</button>
      {/* <button onClick={deleteHandler}> Delete</button> */}
    </Card>
  );
};

export default ExpenseItem;
