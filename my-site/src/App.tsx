import React, { Component } from "react";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import { Hobby } from "./pages/Hobby";

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};

const NoMatch = () => {
  return <div>NoMatch</div>;
};

const HobbyDetail = () => {
  return (
    <div>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export const App = () => {
  return (
    <HashRouter basename="/">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/hobby">Hobby</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/hobby" Component={Hobby} />
          <Route path="*" Component={NoMatch} />
          <Route path="/detail" Component={HobbyDetail} />
        </Routes>
      </div>
    </HashRouter>
  );
};
