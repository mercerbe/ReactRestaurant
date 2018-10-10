import React from "react";
//css
import "./Header.css";

export default class MyComponent extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>React Restaurant</h1>
        <h5 style={{ paddingBottom: "0px" }}>
          View our menu and place and order at 704.946.5474
        </h5>
      </div>
    );
  }
}
