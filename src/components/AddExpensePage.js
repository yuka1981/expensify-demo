import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpesnes } from "../actions/expenses";

const AddExpensePage = (props) => (
  <div>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpesnes(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
