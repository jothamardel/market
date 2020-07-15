import React from "react";
import { Link } from 'react-router-dom'
import { Input, Button, Icon } from "flwww";
import { connect } from "react-redux";
import { loginUserAsync } from '../../redux/User/user.actions';

import './admin-login.styles.css';

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      password: null,
      error: {
        name: true,
        password: true
      },
      loading: true
    }
  }

  handleSubmit = () => {
    const { name, password } = this.state;
    const { loginUserAsync } = this.props;
    this.setState({ loading: true })
    if (!name) {
      this.setState({ error: { name: true }})
      return;
    }
    if (!password) {
      this.setState({ error: { password: true }})
      return;
    }

    loginUserAsync(name, password);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: {
      name: true, password: true
    } })
  }

  render() {
    console.log('admin-login...')
    return (
      <div className='admin-login'>
        <div>
          <Link to='/' className='admin-login_link'>
            <Icon type="arrowLeftCircle" size="30px" color="#079992"/>
            <p>Back</p>
          </Link>
        </div>
        <Input
          style={{ fontSize: "1rem", marginBottom: ".7rem" }}
          icon="user"
          name='name'
          error={ this.state.error.name ? 0 : 1 }
          placeholder="username" 
          onChange={this.handleChange}/>
    
        <Input
          style={{ fontSize: "1rem", marginBottom: ".7rem" }}
          icon="key"
          error={ this.state.error.password ? 0 : 1 }
          name='password'
          type='password'
          placeholder="password" 
          onChange={this.handleChange}/>
        
        <Button outlined 
          // loading={ this.state.loading ? 0 : 1 } 
          onClick={this.handleSubmit}>Login </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUserAsync: (name, password) => dispatch(loginUserAsync(name, password))
});

export default connect(null, mapDispatchToProps)(AdminLogin);