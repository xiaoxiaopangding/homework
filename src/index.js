import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Router, hashHistory, Link, browserHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from "history";


import "./css/index.css";

const history = useRouterHistory(createHashHistory)({
  queryKey: false
});

const One = props => <div>{console.log(props)}1</div>;
const Two = props => <div>2</div>;

const Root = ({ children }) => (
  <div>
    <ul>
      <li>
        <Link to="/item/test?id=111">path/to/one</Link>
      </li>
      <li>
        <Link to="/new/1.1">path/to/two</Link>
      </li>
    </ul>
    Root{children}
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Root}>
            <Route path="item/:id" component={One} />
            <Route path="new/*.*" component={Two}>
              <Route path="/newitem" component={Two} />
            </Route>
          </Route>
        </Router>
      </div>
    );
  }
}
// class App extends Component {
//   render() {
//     return <div>哦哦哦哦哦哦</div>;
//   }
// }

const DOM = document.getElementById("app");

const renderDOM = () => {
  render(
    <App />, DOM
  );
};

renderDOM();

if (module.hot) {
  module.hot.accept([], () => {
    renderDOM()
  });
}