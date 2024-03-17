import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

// Placeholder components for Chaos and Order pages and their subpages
const Chaos = () => <div>Chaos Page</div>;
const Order = () => <div>Order Page</div>;
// const SubPage = ({ match }) => <div>SubPage {match.params.id}</div>;

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/chaos">Chaos</Link> | <Link to="/order">Order</Link>

      <Switch>
        <Route path="/chaos" exact component={Chaos} />
        <Route path="/order" exact component={Order} />
        {/* 
        <Route path="/chaos/:id" component={SubPage} />
        <Route path="/order/:id" component={SubPage} /> */}
      </Switch>
    </div>
  );
};

export default App;
