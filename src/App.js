import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

class App extends React.Component {
  render() {
    return (
      <div className="text-gray-600">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
