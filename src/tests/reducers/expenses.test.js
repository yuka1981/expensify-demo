import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

// should add expense
test("should add expense", () => {
  const expense = {
    id: "4",
    description: "drink",
    amount: 1000,
    note: "",
    createdAt: 12000,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// should edit an expense
test("should ed an expense by id", () => {
  const description = "Rent payment";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      description,
    },
  };
  const state = expensesReducer(expenses, action);

  // only chech change part
  expect(state[0].description).toBe(description);
});

// should not edit expenses if expense not found
test("should not edit expense if expense not found", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "4",
    update: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
