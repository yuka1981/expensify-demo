import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense date", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find("form").simulate("submit", {
    // because our component add e.preventDefault to stop default browser behavior
    preventDefault: () => {},
  });

  // console.log(wrapper.state("error").length);
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "some description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });

  expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
  const value = "some note here";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });

  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid value", () => {
  const value = "12.12";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });

  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalid value", () => {
  const value = ".12";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });

  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  const expense = expenses[0];
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm onSubmit={onSubmitSpy} expense={expense} />
  );

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });

  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalled();
  // expect(onSubmitSpy).toHaveBeenLastCalledWith({
  //   description: expense.description,
  //   amount: expense.amount,
  //   note: expense.note,
  //   createdAt: expense.createdAt,
  // });
});

test("should set new data on data change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);

  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calendar focus on change", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });

  expect(wrapper.state("calenderFocused")).toBe(focused);
});
