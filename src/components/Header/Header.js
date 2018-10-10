import React from "react";
//css
import "./Header.css";

export default class MyComponent extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>React Restaurant</h1>
        <h4>Serving orders through SMS</h4>
      </div>
    );
  }
}
