import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
//import loader
import Spinner from "../Common/Spinner";
//actions
import ProfileActions from "./ProfileActions";

class Dashboard extends React.Component {
  //want profile to load right away, so use componentDidMount lifecyle method
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    //ensure profile state is not null
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    //dashboard
    let dashboardContent;
    //for content
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // //test:// dashboardContent = <h1>As a test, it works!</h1>
      //Check for logged in user data, if greater than 0, user profile must exist
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome{" "}
              <Link to={`/profile/${profile.handle}`}>{user.name} </Link>
            </p>
            <ProfileActions />
            <div style={{ marginBottom: "60px" }} />
          </div>
        );
      } else {
        // user is logged in but hasn't created a profile for the account
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p> You do not have a profile! </p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
