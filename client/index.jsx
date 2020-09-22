import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Vision from "./components/vision";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/v" component={Vision} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".react-container"));
