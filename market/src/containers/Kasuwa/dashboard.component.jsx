import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'flwww';
import "./dashboard.styles.css";
import { connect } from 'react-redux';


const Dashboard = ({ user }) => (
  <div className='kasuwa-dashboard'>
    <div className="kasuwa-menu-bar">
      <Icon type="menu" color="white" />
    </div>
    <div className="kasuwa-dash">
      <h3>Welcome, {user.currentUser[0].firstName}</h3>
      <h4>NGN 0.00</h4>
      <div>
        {/* <Badge count={10}> */}
        <Icon type="creditCard" />
        <p>Wallet</p>
        {/* </Badge> */}
      </div>
      <h4>NGN 0.00</h4>
      <div>
        {/* <Badge count={10}> */}
        <Icon type="hashtag" />
        <p>Available Loan</p>
        {/* </Badge> */}
      </div>
      <h4>NGN 147,879.15</h4>
      <div>
        {/* <Badge count={10000}> */}
        <Icon type="layers" />
        <p>Pool</p>
        {/* </Badge> */}
      </div>
      <Link to='/register'>
        <Button>Register Business</Button>
      </Link>
      <p>continue with business registration</p>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Dashboard);