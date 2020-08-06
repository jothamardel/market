import React, { Component } from "react";
import { Link } from 'react-router-dom';
import BusinessDetails from '../../components/Card/card.component';
import { Drawer, Button, Icon, Input, Badge } from "flwww";
import { connect } from "react-redux";
import { logoutUser } from '../../redux/User/user.actions';
import { getBusinesses, getAllBusinessAddress, getAllBusinessOwner, getAllBusinessCoord, getAllBusinessTag } from '../../redux/Business/business.actions';
import { getCoordinates } from '../../redux/Coordinates/coordinates.actions';
import { showModal } from "../../redux/Modal/modal.actions";
import ShowModal from '../Modal/modal.container';
import './dashboard.styles.css';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      drawerIsVisible: false,
      searchBox: '',
      filteredBusiness: []
    }
  }

  componentDidMount(){

    const {
      getBusinesses, getCoordinates,
      getAllBusinessAddress, getAllBusinessOwner,
      getAllBusinessCoord, getAllBusinessTag
    } = this.props;

    getBusinesses();
    // getAllBusinessAddress();
    // getAllBusinessOwner();
    // getAllBusinessCoord();
    // getAllBusinessTag();
  
    if ('geolocation' in navigator) {
      window.navigator.geolocation.getCurrentPosition((success) => {
        const lat = success.coords.latitude;
        const lng = success.coords.longitude;
        getCoordinates( lat, lng);
      });
      // if (this.props.business.business) {
      //   const { business: { business } } = this.props;
      //   this.setState({ filteredBusiness: business });
      // }
    }

    if (this.props.business.business) {
      const { business: { business } } = this.props;
      this.setState({ filteredBusiness: business });
    }
  }

  toggleDrawer = () => {
    this.setState(prevState => ({ drawerIsVisible: !prevState.drawerIsVisible }))
  }

  onSearchChange = (event) => {
    event.preventDefault();
    this.setState({ searchBox: event.target.value });
  }
  runSearch = () => {
    let biz = [];
    if (this.props.business.business) {
      const { business: { business } } =  this.props;
      biz = business.filter((item) => (
        item.name.toLowerCase().includes(this.state.searchBox.toLowerCase())
      ))
      this.setState({ filteredBusiness: biz })
    }
  }

  render(){
    const { logoutUser } = this.props;
    const { filteredBusiness } = this.state;
    return (
      <div className='dashboard'>
        <div className='dashboard_menu' onClick={ this.toggleDrawer }>
          <Icon type="menu"  color='#079992'/>
          <span>Menu</span>
        </div>
        <h4>Businesses</h4>
        <div className='dashboard_stat'>
          <Badge count={100}>
            <p>Abuja</p>
          </Badge>
          <Badge count={200}>
            <p>Total</p>
          </Badge>
          <Badge count={100}>
            <p>Jos</p>                      
          </Badge>
        </div>
        <div className='dashboard_search'>
          <Input
            style={{ fontSize: "1rem", marginBottom: ".7rem" }}
            className='search'
            icon="search"
            name='name'
            onChange={ this.onSearchChange }
            placeholder="search for business"/>
            <Button outlined 
            style={{  height: "30px" }}
            type='submit'
            onClick={ this.runSearch }
            >
             {
               this.state.filteredBusiness.length === 0 ? 'Refresh' : 'Search'
             }
            </Button>
        </div>
        <div className='dashboard-business_container'>

          {
            (filteredBusiness.length > 0) ? 
            filteredBusiness.map((item, index) => (
              <div className='dashboard_business' onClick={() => this.props.showModal(item.phoneno)} key={`${index}, ${item._id}`}>
                <BusinessDetails 
                  key={item._id}
                  name = {item.business_name}
                  phoneno = {item.phone_number}
                  rcNumber = {item.rc_number}
                  registered = {item.registered}
                /> 
              </div>
            )) : <h6 className='dashboard_business_no-result'>No Result</h6>
          }
        
        </div>
        

        {
          this.props.modal.showModal ?
          <ShowModal /> : null
        }


        <Drawer
          showDrawer={ this.state.drawerIsVisible }
          toggleDrawer={ this.toggleDrawer }
          >
          <div className='drawer-items'>
            <Link to='/register'>
              <div className='drawer-items_menu'>
                <Icon type="edit2" size='25px' color='#079992'/>
                <h3>Register business</h3>
              </div>
            </Link>
            <Link to='/update'>
              <div className='drawer-items_menu'>
                <Icon type="edit" color='#079992'/>
                <h3>Update business</h3>
              </div>
            </Link>
            <Link to='/dashboard'>
              <div className='drawer-items_menu'>
                <Icon type="book" color='#079992'/>
                <h3>View business</h3>
              </div>
            </Link>
            <Link to='/login' onClick={ logoutUser }>
              <div className='drawer-items_menu'>
                <Icon type="logout" color='#079992'/>
                <h3>Logout</h3>
              </div>
            </Link>
          </div>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  business: state.business,
  modal: state.modal
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  getBusinesses: () => dispatch(getBusinesses()),
  getAllBusinessAddress: () => dispatch(getAllBusinessAddress()),
  getAllBusinessOwner: () => dispatch(getAllBusinessOwner()),
  getAllBusinessCoord: () => dispatch(getAllBusinessCoord()),
  getAllBusinessTag: () => dispatch(getAllBusinessTag()),
  getCoordinates: (lat, lng) => dispatch(getCoordinates(lat,lng)),
  showModal: (index) => dispatch(showModal(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);