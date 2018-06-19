import React, { Component } from "react";
import { render } from "react-dom";
import "./css/index.css"
class App extends Component {
  render() {
    return <div>哦哦哦哦哦哦</div>;
  }
}

const DOM = document.getElementById("app");

const renderDOM = () => {
  render(<App />, DOM);
};

renderDOM();

if (module.hot) {
  module.hot.accept([], () => {
     renderDOM()
  });
}