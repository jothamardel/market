import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Icon } from 'flwww';
import { registerBusinessAsync } from '../../redux/RegisterBusiness/register-business.actions';
import { getCoordinates } from '../../redux/Coordinates/coordinates.actions';
import CustomInput from '../../components/CustomInput/custom-input.component';

import './create-business.styles.css';
import Tags from '../../components/Tags/tags.component';
import TagsItems from '../../utils/tags';
import { connect } from 'react-redux';

class CreateBusiness extends React.Component {
  constructor(){
    super();
    this.state = {
      businessname: '',
      phoneno: '',
      rcNumber: '',
      businessowner: '',
      email: '',
      address: '',
      city: '',
      state: '',
      tag: '',
      category: '',
      lat: '',
      lng: '',
      registered: '',
      showTag: false,
      tagItems:'',
      loading: false
    }
  }

  componentDidMount() {

    // const { currentUser } = this.props.user
    //     console.log(currentUser)
    
  }

  onInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === 'registered' && value === 'on') {
      console.log('registered', value)
      this.setState({ registered: true })
      return;
    }
    if (name === 'registered' && value !== 'on') {
      console.log('registered', value)
      this.setState({ registered: false })
      return;
    }
    this.setState({ [name]: value })
  }

  openTag = () => {
    this.setState({ showTag: true })
  }
  closeTag = () => {
    this.setState({ showTag:  false })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    
    if ('geolocation' in navigator) {
      const { registerBusinessAsync, 
      } = this.props;
      window.navigator.geolocation.getCurrentPosition((success) => {
        const lat = success.coords.latitude;
        const lng = success.coords.longitude;
        const {
          businessname, phoneno, rcNumber,
          businessowner, email, address,
          city, state, tag, category, registered
        } = this.state;
        const { currentUser } = this.props.user
        registerBusinessAsync(
          businessowner, businessname, phoneno,
          email, category,   
          lat, lng, registered, rcNumber,
          city, state, address, tag, currentUser
        );
      });
    }

    
  }

  render() {
    const { register: { isSending, status } } = this.props;
    const filteredTags = TagsItems.filter(item => {
      return item.toLowerCase().includes(this.state.tagItems.toLowerCase())
    }); 
    return (
      <div className='create-business_container'>
        <div className='create-business_wrapper'>
        {
          !status ? null : <p className={`${
            status === 'Unable to resgister business.' ? 'error_red' : ''
          } create-business_container_message`}>{ status }</p>
        }
          <h1>Register a Business</h1>
          <div className='create-business_link'>
            <Link to='/dashboard'>
              <Icon type="arrowLeftCircle" size="30px" color="#079992"/>
              <p>Back</p>
            </Link>
          </div>
          <form onSubmit={this.handleSubmit} 
            className='create-business_form'>

            <Input 
              className='custom-input' required 
              type='text' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='Business Name *' 
              name='businessname' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>

            <Input 
              className='custom-input' required 
              type='number' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='Phone Number *' 
              name='phoneno' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>

            <Input 
              className='custom-input'
              type='text' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='RC Number *' 
              name='rcNumber' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>

            <Input 
              className='custom-input' required 
              type='text' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='Address *' 
              name='address' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>

            <Input 
              className='custom-input' required 
              type='text' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='City *' 
              name='city' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>

            <Input 
              className='custom-input' required 
              type='text' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='State *' 
              name='state' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>

            <Input 
              className='custom-input' required 
              type='text' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='category *' 
              name='category' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>

            <Input 
              className='custom-input' required 
              type='text' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='tag *' 
              name='tag' 
              onChange={this.onInputChange}
              onClick={this.openTag}/>
              {
                this.state.showTag ? <Tags filteredTags={filteredTags}/> : null
              }
            
            <Input 
              className='custom-input' required 
              type='text' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='Business Owner *' 
              name='businessowner' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>

            <Input 
              className='custom-input' 
              type='email' 
              // onFocus="this.value=''"
              autoComplete='off'
              placeholder='Email (optional)' 
              name='email' 
              onChange={this.onInputChange}
              onClick={this.closeTag}/>
            
            <div>
              <CustomInput
                style={{ width: '0.8rem' }}
                type='checkbox' 
                placeholder='registered' 
                name='registered' 
                onChange={this.onInputChange}/>
                <span>
                  Registered with CAC
                </span>
            </div>
            {
              isSending ?
                <Button 
                  className='custom-button' 
                  type='submit' 
                  outlined
                  loading={"true"}
                  >Submit Details</Button>
                :
                <Button 
                  className='custom-button' 
                  type='submit' 
                  outlined
                  >Submit Details</Button>
            }
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  register: state.register,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  registerBusinessAsync: (
    businessowner, businessname,
    phoneno, email, category,
    latitude, longitude, registered, rcNumber,
    city, state, address, tag, agent
  ) => dispatch(registerBusinessAsync(
    businessowner, businessname,
    phoneno, email, category,
    latitude, longitude, registered, rcNumber,
    city, state, address, tag, agent
  )),
  getCoordinates: (lat, lng) => dispatch(getCoordinates(lat, lng))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBusiness);