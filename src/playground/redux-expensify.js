import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

// Action generator
// Add Expenses

const addExpesnes = ({ description = "", amount = 0, createdAt = 0 } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    amount,
    createdAt,
  },
});

// Remove Expenses

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE
const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // expenses is an array
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      // filter return
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// can not filter data in action generator or reducer
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

// filter expense data here!!
store.subscribe(() => {
  // console.log(store.getState());
  const state = store.getState(); // all expenses
  const { expenses, filters } = state;
  const visibleExpenses = getVisibleExpenses(expenses, filters);

  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpesnes({ description: "Rent", amount: 100, createdAt: 1000 })
);

const expenseTwo = store.dispatch(
  addExpesnes({ description: "Coffee", amount: 300, createdAt: 100 })
);

// console.log(expenseOne);
// console.log(expenseTwo);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }));

// store.dispatch(setTextFilter("ffe"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(250));

// expense demo state
const demoState = {
  expenses: [
    {
      id: "zaq12wxds",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 56500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
