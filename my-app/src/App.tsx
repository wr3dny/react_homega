import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.module.css";
import { Order } from "./pages/order/Order";

// Placeholder components for Chaos and Order pages and their subpages
const Chaos = () => <div>Chaos Page</div>;
const SubPage = () => <div>SubPage</div>;
const SubPage2 = () => <div>SubPage2</div>;

const App: React.FC = () => {
  return (
    <div>
      <h1>Chose</h1>
      <Link to="/chaos">Chaos</Link> | <Link to="/order">Order</Link>
      <Switch>
        <Route path="/chaos" exact component={Chaos} />
        <Route path="/order" exact component={Order} />
        <Route path="/" render={() => <div>Home Page</div>} />
        <Route path="*" render={() => <div>404 Not Found</div>} />
        <Route path="/chaos/:id" component={SubPage} />
        <Route path="/order/:id" component={SubPage} />
        <Route path="/chaos/:id/:id2" component={SubPage2} />
      </Switch>
    </div>
  );
};

export default App;
