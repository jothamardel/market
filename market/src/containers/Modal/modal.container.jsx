import React, { Component } from "react";
import { Modal, Button } from "flwww";
import { connect } from "react-redux";
import { showModal } from "../../redux/Modal/modal.actions";

class ShowModal extends Component {
 
 
  render(){
    
    const { showModal, index } = this.props.modal;
    const { business: { business } } = this.props;
    const selectedBusiness = business.filter(item => {
      return item._id.toString() === index.toString();
    })
    console.log(selectedBusiness);
    return (
      <div>
        <Modal
          isVisible={ showModal }
          toggleModal={ this.props.showModal }
          >
            

          <h3>{ selectedBusiness[0].business_name }</h3>
          <h3> RC Number: { selectedBusiness[0].rc_number }</h3>
          <hr></hr>
          <p> Owner: { selectedBusiness[0].business_owner }</p>
          <p> Phone No: { selectedBusiness[0].phone_number }</p>
          <p> email: { selectedBusiness[0].email }</p>
          <hr></hr>
          <p>Address: { selectedBusiness[0].address }</p>
          <p>City: { selectedBusiness[0].city }</p>
          <p>State: { selectedBusiness[0].state }</p>
          <hr></hr>
          <p>Latitude: { selectedBusiness[0].coords.lat.$numberDecimal }</p>
          <p>Longitude: { selectedBusiness[0].coords.lng.$numberDecimal }</p>
          <hr></hr>
          <p>Category: { selectedBusiness[0].category }</p>
          <p>Tag: { selectedBusiness[0].tag }</p>


          <Button onClick={ this.props.showModal } type="primary">Continue</Button>
          <a href={ `tel: ${selectedBusiness[0].phone_number}` }>
            <Button type="primary">Call</Button>
          </a> 
        </Modal>
         

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  modal: state.modal,
  business: state.business
});

const mapDispatchToProps = (dispatch) => ({
  showModal: () => dispatch(showModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowModal);