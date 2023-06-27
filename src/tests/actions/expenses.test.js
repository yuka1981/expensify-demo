import {
  addExpesnes,
  editExpense,
  removeExpense,
} from "../../actions/expenses";

test("should setup remove expenses action object", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("shoud setup edit expenses action object", () => {
  const id = "123abc";
  const update = { note: "New note value" };
  const action = editExpense(id, update);

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    update: {
      note: "New note value",
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last month rent",
  };
  const action = addExpesnes(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpesnes();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String),
    },
  });
});
