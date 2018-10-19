import React, { Component } from "react";
import { Link } from "react-router-dom";
//may remove {} from PropTypes
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
//import components
import LandingHeader from "../Header/Header";
import OrderList from "../OrderList/OrderList";
import About from "../About/About";
//semantic imports
import { Grid } from "semantic-ui-react";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="main" style={{}}>
        {/* add login here with auth */}
        {/* add dashboard here with auth for admins */}
        <Link to="/login" className="">
          Login
        </Link>
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
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
