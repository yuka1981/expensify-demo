import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpesnes } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(addExpesnes({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpesnes({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(addExpesnes({ description: "Rent", amount: 109500 }));
// store.dispatch(setTextFilter("bill"));
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);

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

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
