import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./ReactMenu/Home";
import Service from "./ReactMenu/Service";
import About from "./ReactMenu/About";
import Contact from "./ReactMenu/Contact";
import Navbar from "./ReactMenu/Navbar";
import Footer from './ReactMenu/Footer'
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/service" component={Service} exact />
        <Route path="/contact" component={Contact} exact />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
