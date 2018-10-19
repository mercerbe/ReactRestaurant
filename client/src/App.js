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
            {/* add login here with auth */}
            {/* add dashboard here with auth for admins */}
            <LandingHeader />
            <Grid columns={2} divided>
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}
                style={{ paddingTop: "1em" }}
              >
                <About />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <OrderList />
              </Grid.Column>
            </Grid>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
