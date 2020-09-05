import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/User/user.actions';
import { Icon, Button, Drawer } from 'flwww';
import "./dashboard.styles.css";
import { connect } from 'react-redux';


const KasuwaDashboard = ({ user, logoutUser }) => {
  const [showMenu, setMenu] = useState(false);
  console.log(showMenu)
  return (
    <div className='kasuwa-dashboard'>
      <div className="kasuwa-menu-bar" onClick={(event) => setMenu(!showMenu)}>
        <Icon type="menu" color="white" />
      </div>
      <div className="kasuwa-dash">
        <h3>Welcome, {user.currentUser ? user.currentUser[0].firstName : null}</h3>
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
      <Drawer
        showDrawer={showMenu}
        toggleDrawer={() => setMenu(false)}
      // onClick={setMenu}
      >
        <div className='drawer-items'>
          <Link to='/register'>
            <div className='drawer-items_menu'>
              <Icon type="edit2" size='30px' color='#079992' />
              <h3>Register business</h3>
            </div>
          </Link>
          {/* <Link to='/dashboard'>
            <div className='drawer-items_menu'>
              <Icon type="edit" color='#079992' />
              <h3>Update business</h3>
            </div>
          </Link> */}
          {/* <Link to='/dashboard'>
            <div className='drawer-items_menu'>
              <Icon type="book" color='#079992' />
              <h3>View business</h3>
            </div>
          </Link> */}
          <Link to='/login' onClick={logoutUser}>
            <div className='drawer-items_menu'>
              <Icon type="logout" size="30px" color='#079992' />
              <h3>Logout</h3>
            </div>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(KasuwaDashboard);