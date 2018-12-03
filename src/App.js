import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
