import React, { useState } from "react";
import { useEffect } from "react";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import "./ExpensesForm.css";

export default function ExpensesForm(props) {
  // setInput Data
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // setError
  const [error, setError] = useState();

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setErrors
    if (
      enteredTitle.trim().length === 0 ||
      enteredPrice.trim().length === 0
    ) {
      setError({
        title: "Missing Field !",
        description: "Please Fill All Required Fields"
      });
      return;
    }

    if(+enteredPrice < 0.01) {
      setError({
        title: "Incorrect Price",
        description: "Please write correct price > $0.01"
      })
      return
    }
    const newExpense = {
      title: enteredTitle,
      price: +enteredPrice,
      date: new Date(enteredDate),
    };
    // Sending Value to Parent
    props.onSaveForm(newExpense);
    // EmptyForm
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };
  // Close Error Modal
  const onSubmit = () => {
    setError(null)
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        {error && <ErrorModal title={error.title} description={error.description} onSubmit={onSubmit}/>}
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title: </label>
            <input
              onChange={titleChangeHandler}
              value={enteredTitle}
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="price">Price: </label>
            <input
              onChange={priceChangeHandler}
              value={enteredPrice}
              type="number"
              step="0.01"
              name="price"
              id="price"
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date: </label>
            <input
              onChange={dateChangeHandler}
              value={enteredDate}
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              name="date"
              id="price"
            />
          </div>
          <div className="new-expense__btns">
            <Button className="button" type="button" onClick={props.onCancel}>
              Cancel
            </Button>
            <Button className="button" type="submit">
              Add Expense
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
