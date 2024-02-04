// /src/App.tsx

import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/button/button";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Hobby = () => <h2>Hobby</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>
        <Button label="Click me" onClick={() => alert("Button clicked")} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobby" element={<Hobby />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
