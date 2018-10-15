import React, { Component } from "react";
//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/Private/PrivateRoute";
//track token
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
//import { setCurrentUser, logoutUser } from "./actions/authActions";
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
