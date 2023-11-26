import React, { Component, useState } from "react";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import { Hobby } from "./pages/Hobby";
import { ButtonMode } from "./component/ButtonMode";
import "./App.css";
import { Library } from "./pages/Library";
import { Footer } from "./component/Footer";
import { routes } from "./routes/routes";
import { Navbar } from "./component/Navbar";


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
            <Navbar />


              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} Component={route.component} />
                ))}
              </Routes>


          </div>
          <Footer />
        </HashRouter>
      </div>
    </>
  );
};

