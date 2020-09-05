import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Icon, Drawer } from 'flwww';
import CustomInput from '../../components/CustomInput/custom-input.component';
import ModalMessage from '../../components/ModalMessage/modal-message.component';

import { showMessage } from '../../redux/Modal/modal.actions';

// import '../CreateBusiness/create-business.styles.css';
import { connect } from 'react-redux';

class EditBusiness extends React.Component {
  constructor() {
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
      tagItems: '',
      loading: false,
      drawerIsVisible: false
    }
  }

  componentDidMount() {

    // const { currentUser } = this.props.user
    //     console.log(currentUser)

  }

  onInputChange = (event) => {
    event.preventDefault();
    const { name, placeholder } = event.target;
    if (name === 'registered' && placeholder === 'on') {
      console.log('registered', placeholder)
      this.setState({ registered: true })
      return;
    }
    if (name === 'registered' && placeholder !== 'on') {
      console.log('registered', placeholder)
      this.setState({ registered: false })
      return;
    }
    this.setState({ [name]: placeholder })
  }

  openTag = () => {
    this.setState({ showTag: true })
  }
  closeTag = () => {
    this.setState({ showTag: false })
  }

  handleSubmit = (event) => {
    event.preventDefault();


    // if ('geolocation' in navigator) {
    //   const { registerBusinessAsync, showMessage 
    //   } = this.props;
    //   window.navigator.geolocation.getCurrentPosition((success) => {
    //     const lat = success.coords.latitude;
    //     const lng = success.coords.longitude;
    //     const {
    //       businessname, phoneno, rcNumber,
    //       businessowner, email, address,
    //       city, state, tag, category, registered
    //     } = this.state;
    //     const { currentUser } = this.props.user

    //   });
    //   showMessage();
    // }


  }

  toggleDrawer = () => {
    this.setState(prevState => ({ drawerIsVisible: !prevState.drawerIsVisible }))
  }

  render() {
    const { register: { isSending, status }, modal } = this.props;

    const { index } = this.props.modal;
    const { business: { business } } = this.props;
    const selectedBusiness = business.filter(item => {
      return item._id.toString() === index.toString();
    })
    return (
      <React.Fragment>

        <div className='dashboard_menu' onClick={this.toggleDrawer}>
          <Icon type="menu" color='#079992' />
          <span>Menu</span>
        </div>
        <div className='create-business_container'>
          <div className='create-business_wrapper'>
            {
              !status ? null : <p className={`${
                status === 'Unable to resgister business.' ? 'error_red' : ''
                } create-business_container_message`}>{status}</p>
            }
            <h1>Edit Business</h1>
            <div className='create-business_link'>
              <Link to='/dashboard'>
                <Icon type="arrowLeftCircle" size="30px" color="#079992" />
                <p>Back</p>
              </Link>
            </div>
            <form onSubmit={this.handleSubmit}
              className='create-business_form'>

              <Input
                className='custom-input' required
                type='text'
                autoComplete='off'
                // placeholder='Business Name *' 
                name='businessname'
                placeholder={`${selectedBusiness[0].business_name}`}
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <Input
                className='custom-input' required
                type='number'
                autoComplete='off'
                // placeholder='Phone Number *' 
                placeholder={selectedBusiness[0].phone_number}
                name='phoneno'
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <Input
                className='custom-input'
                type='text'
                autoComplete='off'
                // placeholder='RC Number *' 
                placeholder={!selectedBusiness[0].rc_number ? '' : selectedBusiness[0].rc_number}
                name='rcNumber'
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <Input
                className='custom-input' required
                type='text'
                autoComplete='off'
                // placeholder='Address *' 
                placeholder={selectedBusiness[0].address}
                name='address'
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <Input
                className='custom-input' required
                type='text'
                autoComplete='off'
                // placeholder='City *' 
                placeholder={selectedBusiness[0].city}
                name='city'
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <Input
                className='custom-input' required
                type='text'
                autoComplete='off'
                // placeholder='State *' 
                placeholder={selectedBusiness[0].state}
                name='state'
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <Input
                className='custom-input' required
                type='text'
                autoComplete='off'
                // placeholder='category *' 
                placeholder={selectedBusiness[0].category}
                name='category'
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <Input
                className='custom-input' required
                type='text'
                autoComplete='off'
                // placeholder='tag *' 
                placeholder={selectedBusiness[0].tag}
                name='tag'
                onChange={this.onInputChange}
                onClick={this.openTag} />

              <Input
                className='custom-input' required
                type='text'
                autoComplete='off'
                // placeholder='Business Owner *' 
                placeholder={selectedBusiness[0].business_owner}
                name='businessowner'
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <Input
                className='custom-input'
                type='email'
                autoComplete='off'
                // placeholder='Email (optional)' 
                placeholder={!selectedBusiness[0].email ? '' : selectedBusiness[0].email}
                name='email'
                onChange={this.onInputChange}
                onClick={this.closeTag} />

              <div>
                <CustomInput
                  style={{ width: '0.8rem' }}
                  type='checkbox'
                  placeholder='registered'
                  name='registered'
                  onChange={this.onInputChange} />
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

          <Drawer
            showDrawer={this.state.drawerIsVisible}
            toggleDrawer={this.toggleDrawer}
          >
            <div className='drawer-items'>
              <Link to='/register'>
                <div className='drawer-items_menu'>
                  <Icon type="edit2" size='25px' color='#079992' />
                  <h3>Register business</h3>
                </div>
              </Link>
              <Link to='/dashboard'>
                <div className='drawer-items_menu'>
                  <Icon type="edit" color='#079992' />
                  <h3>Update business</h3>
                </div>
              </Link>
              <Link to='/dashboard'>
                <div className='drawer-items_menu'>
                  <Icon type="book" color='#079992' />
                  <h3>View business</h3>
                </div>
              </Link>
              <Link to='/login'
              // onClick={ logoutUser }
              >
                <div className='drawer-items_menu'>
                  <Icon type="logout" color='#079992' />
                  <h3>Logout</h3>
                </div>
              </Link>
            </div>
          </Drawer>
          {
            modal.showMessage ?
              <ModalMessage>
                {status}
              </ModalMessage> : null
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  register: state.register,
  business: state.business,
  user: state.user,
  modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({
  showMessage: () => dispatch(showMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBusiness);