import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'flwww';
import "./registration.styles.css";


class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      city: "",
      state: ""
    }
  }

  onInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  registerUser = (event) => {
    event.preventDefault();
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
          <form onSubmit={this.registerUser}>
            <Input required name="firstName" type='text' onChange={this.onInputChange} placeholder='First Name' />
            <Input required name="lastName" type='text' onChange={this.onInputChange} placeholder='Last Name' />
            <Input required name="number" type='number' onChange={this.onInputChange} placeholder='Phone No.' />
            <Input name="email" type='email' onChange={this.onInputChange} placeholder='Email' />
            <Input required name="city" type='text' onChange={this.onInputChange} placeholder='City' />
            <Input required name="state" type='text' onChange={this.onInputChange} placeholder='State' />
            <Link to="/dashboard">
              <Button type="submit">Register</Button>
            </Link>
            <Link to='/'>
              <Button>Back</Button>
            </Link>
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

export default Registration;