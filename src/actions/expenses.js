import { v4 as uuid } from "uuid";

// Action generator
// Add Expenses
export const addExpesnes = ({
  description = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    amount,
    createdAt,
  },
});

// Remove Expenses
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update,
});

// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
