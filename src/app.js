import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import { addExpesnes } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpesnes({ description: "Water bill" }));
store.dispatch(addExpesnes({ description: "Gas bill" }));
// store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpense);

// store.subscribe(() => {
//   const state = store.getState();
//   const { expenses, filters } = state;
//   const visibleExpense = getVisibleExpenses(expenses, filters);
//
//   console.log(visibleExpense);
// });

ReactDOM.render(<AppRouter />, document.getElementById("app"));
