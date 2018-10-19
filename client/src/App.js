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
import { setCurrentUser, logoutUser } from "./actions/authActions";
//app css
import "./App.css";
//components
import LandingHeader from "./components/Header/Header";
import OrderList from "./components/OrderList/OrderList";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/not-found/NotFound";
import Login from "./components/auth/Login";
//semantic imports
import { Grid } from "semantic-ui-react";

//check for token on every page req
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
  //check for exp token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //autologout user
    store.dispatch(logoutUser());
    //redirect to home
    window.location.href = "/";
  }
}

class App extends Component {
  //render method
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="main" style={{}}>
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
