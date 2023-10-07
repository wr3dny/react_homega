import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <HashRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
