import React from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./ExpensesItem.css";

export default function ExpensesItem(props) {

  const deleteHandler = () => {
    props.onDeleteBtn(props.id)
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.price} $</div>
          <Button className={"expense-item__deleteBtn"} onClick={deleteHandler}>
            <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
      </Card>
    </li>
  );
}
