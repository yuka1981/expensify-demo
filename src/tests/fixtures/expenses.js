import moment from "moment";

export default [
  {
    id: "1",
    description: "Rent",
    amount: 19500,
    note: "",
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "2",
    description: "Gum",
    amount: 2000,
    note: "",
    createdAt: 0,
  },
  {
    id: "3",
    description: "Water",
    amount: 100,
    note: "",
    createdAt: moment(0).add(4, "day").valueOf(),
  },
];
