import React from "react";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <h1>Content</h1>
      </div>
    );
  }
}
