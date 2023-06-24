import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";

const ExpenseDashboardPage = () => <div>This is expense dashboard page.</div>;

const AddExpensePage = () => <div>This is add expense page.</div>;

const EditExpensePage = () => <div>This is edit expense page.</div>;

const HelpPage = () => <div>This is help page.</div>;

const NotFoundPage = () => (
  <div>
    404!!
    <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <div>
    <h1>Expencify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </div>
);

const routes = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
