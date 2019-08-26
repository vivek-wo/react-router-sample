import React from "react";
import { Link, Route } from "react-router-dom";

function CatalogIndex({ match }) {
  console.log(match);
  return (
    <div>
      <h2>{match.params.index}</h2>
    </div>
  );
}

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Catalog</h1>
        <ul>
          <li>
            <Link to={`${match.url}/59`}>Index-59</Link>
          </li>
          <li>
            <Link to={`${match.url}/Catalog-34`}>Catalog-34</Link>
          </li>
        </ul>
        <Route path={`${match.path}/:index`} component={CatalogIndex} />
        <Route
          exact
          path={match.path}
          render={() => {
            return (
              <h3>
                <span>Please select a Catalog</span>
              </h3>
            );
          }}
        />
      </div>
    );
  }
}
