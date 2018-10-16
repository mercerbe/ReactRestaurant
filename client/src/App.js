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
import LandingHeader from "./components/Header/Header";
import OrderList from "./components/OrderList/OrderList";
//semantic imports
import { Grid, Header, Icon, Segment, Container } from "semantic-ui-react";

class App extends Component {
  //render method
  render() {
    return (
      <div className="main">
        <LandingHeader />
        <Grid columns={2} divided>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Header as="h3" icon textAlign="center">
              <Icon name="food" circular />
              <Header.Content>About Our Restaurant:</Header.Content>
              <Container>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                  vitae, justo. Nullam dictum felis eu pede link mollis pretium.
                  Integer tincidunt. Cras dapibus. Vivamus elementum semper
                  nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                  lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi.
                </p>
              </Container>
            </Header>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Header as="h3" icon textAlign="center">
              <Icon name="ordered list" circular />
              <Header.Content>Current Orders and Wait Time:</Header.Content>
            </Header>
            <Container>
              <Segment raised color="violet">
                Wait Time: insert time based on current orders
              </Segment>
            </Container>
            <OrderList />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
