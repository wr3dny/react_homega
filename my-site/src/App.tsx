import React, { Component, useState } from "react";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import { Hobby } from "./pages/Hobby";
import { ButtonMode } from "./component/ButtonMode";
import "./App.css";
import { Library } from "./pages/Library";
import { Footer } from "./component/Footer";
import { routes } from "./routes/routes";


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
                  <li>
                    <Link to="/library">Library</Link>
                  </li>
                </ul>
              </div>


              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} Component={route.component} />
                ))}
              </Routes>

            </div>
          </div>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
};

