import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import Content from "./Content";

function RouterIndex() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
        </ul>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/content" component={Content} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterIndex />, rootElement);
