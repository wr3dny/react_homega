import React, { Component, useState } from "react";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import { Hobby } from "./pages/Hobby";
import { ButtonMode } from "./component/ButtonMode";
import "./App.css";

const Home = () => {
  return (
    <>
      <div>Home</div>
    </>
  );
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
  const [mode, setMode] = useState("light");

  const lightDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
    console.log(mode);
  };

  return (
    <>
      <div className="app-all">
        <HashRouter basename="/">
          <div className={mode}>
            <h1>My Site</h1>
            <ButtonMode onClick={lightDarkMode} />
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
          </div>
        </HashRouter>
      </div>
    </>
  );
};
