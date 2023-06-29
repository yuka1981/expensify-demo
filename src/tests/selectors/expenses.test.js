import moment from "moment/moment.js";
import selectExpenses from "../../selectors/expenses.js";
import expenses from "../fixtures/expenses";

test("should fiter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

// filter startDate / endDate are moment instance
// expesens createdAt is only unix epoc number
test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1]]);
});

// should filter by endDate
test("should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days"),
  };
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[0]]);
});

// should sort by date
test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

// should sort by amount
test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});
