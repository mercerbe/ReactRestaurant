import React, { Component } from "react";
//app css
import "./App.css";
//components
import Header from "./components/Header/Header";
import OrderList from "./components/OrderList/OrderList";

class App extends Component {
  //render method
  render() {
    return (
      <div className="main">
        <Header />
        <OrderList />
      </div>
    );
  }
}

export default App;
