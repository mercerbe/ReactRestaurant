import React from "react";
//css
import "./Header.css";
//images
import Logo from "../../img/logo_transparent.png";
//semantic imports
import { Image } from "semantic-ui-react";

export default class MyComponent extends React.Component {
  render() {
    return (
      <div className="landingHeader">
        <Image
          id="logo"
          src={Logo}
          style={{ maxHeight: "200px !important", width: "200px" }}
          fluid
          centered
        />
        <h1 style={{ marginTop: "-50px" }}>React Restaurant</h1>
        <h5 style={{ paddingBottom: "0px" }}>
          View our menu and place and order at 704.946.5474
        </h5>
      </div>
    );
  }
}
