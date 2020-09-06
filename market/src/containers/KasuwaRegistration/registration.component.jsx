import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'flwww';
import { createUserAsync } from "../../redux/User/user.actions";
import "./registration.styles.css";
import { connect } from 'react-redux';


class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      city: "",
      state: "",
      password: ""
    }
  }

  onInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  registerUser = (event) => {
    event.preventDefault();
    const { createUserAsync } = this.props;
    const { firstName, lastName, number, email, city, state, password } = this.state;
    createUserAsync(firstName, lastName, number, email, city, state, password);
  }

  render() {
    return (
      <>
        <div className='kasuwa-reg'>
          <div className='kasuwa-title'>
            {/* <Link to='/' className='admin-login_link'>
              <Icon type="arrowLeftCircle" size="30px" color="#079992" />
              <p>Back</p>
            </Link> */}
            <h3>Create an account.</h3>

          </div>
          {
            this.props.user.currentUser ?
              <p>{this.props.user.currentUser}</p> : null
          }
          <form onSubmit={this.registerUser}>
            <Input required name="firstName" type='text' onChange={this.onInputChange} placeholder='First Name' />
            <Input required name="lastName" type='text' onChange={this.onInputChange} placeholder='Last Name' />
            <Input required name="number" type='number' onChange={this.onInputChange} placeholder='Phone No.' />
            <Input name="email" type='email' onChange={this.onInputChange} placeholder='Email' />
            <Input required name="city" type='text' onChange={this.onInputChange} placeholder='City' />
            <Input required name="state" type='text' onChange={this.onInputChange} placeholder='State' />
            <Input required name="password" type='password' onChange={this.onInputChange} placeholder='password' />
            {
              this.props.user.isPending ?
                <Button outlined loading={"true"}>Login</Button> :
                <>
                  <Button type="submit">Register</Button>
                  <Link to='/'>
                    <Button>Back</Button>
                  </Link>
                </>
            }
            <div>
              <Link to='/login'>
                Alredy have an account? Login here.
              </Link>
            </div>
          </form>
        </div>
        <div className='kasuwa-img'>
          <img src={require('../../assets/savings.svg')} alt="" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  createUserAsync: (firstName, lastName, number, email, city, state, password) => dispatch(createUserAsync(firstName, lastName, number, email, city, state, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);