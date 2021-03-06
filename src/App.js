import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import AllProjects from "./pages/AllProjects";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  
  return (
    <>
    <Navbar />

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={AllProjects} />
      </Switch>
    </Router>

    </>
  );
}

export default App;
