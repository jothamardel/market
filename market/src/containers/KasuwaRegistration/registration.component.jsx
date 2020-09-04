import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Icon } from 'flwww';
import Savings from '../../assets/savings.png';
import "./registration.styles.css";


class Registration extends React.Component {

  render() {
    return (
      <>
        <div className='kasuwa-reg'>
          <div className='kasuwa-title'>
            {/* <Link to='/' className='admin-login_link'>
              <Icon type="arrowLeftCircle" size="30px" color="#079992" />
              <p>Back</p>
            </Link> */}
            <h3>Registration</h3>
          </div>
          <form>
            <Input required type='text' placeholder='First Name' />
            <Input required type='text' placeholder='Last Name' />
            <Input required type='number' placeholder='Phone No.' />
            <Input required type='email' placeholder='Email' />
            <Input required type='text' placeholder='City' />
            <Input required type='text' placeholder='State' />
            <Button type="submit">Create account</Button>
            <Link to='/'>
              <Button>Back</Button>
            </Link>
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