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
