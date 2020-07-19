import React, { Component } from "react";
import { Modal, Button } from "flwww";
import { connect } from "react-redux";
import { showModal } from "../../redux/Modal/modal.actions";

class ShowModal extends Component {
 
 
  render(){
    
    const { showModal, index } = this.props.modal;
    const { business: { business, address, owner, coord, tag } } = this.props;
    const filteredBusiness = business.find(item  => item.phoneno === index);
    const filteredAddress = address.find(item  => item.phoneno === index);
    const filteredOwner = owner.find(item  => item.phoneno === index);
    const filteredCoord = coord.find(item  => item.phoneno === index);
    const filteredTag = tag.find(item  => item.phoneno === index);
   console.log(filteredBusiness)
    return (
      <div>

        <Modal
          isVisible={ showModal }
          toggleModal={ this.props.showModal }
          >
            

          <h3>{ filteredBusiness.name }</h3>
          <h3> RC Number: { filteredBusiness.rc_number }</h3>
          <hr></hr>
          <p> Owner: { filteredOwner.name }</p>
          <p> Phone No: { filteredOwner.phoneno }</p>
          <p> email: { filteredOwner.email }</p>
          <hr></hr>
          <p>Address: { filteredAddress.address }</p>
          <p>City: { filteredAddress.city }</p>
          <p>State: { filteredAddress.state }</p>
          <hr></hr>
          <p>Latitude: { filteredCoord.lat }</p>
          <p>Longitude: { filteredCoord.lng }</p>
          <hr></hr>
          <p>Category: { filteredTag.category }</p>
          <p>Tag: { filteredTag.tag }</p>


          <Button onClick={ this.props.showModal } type="primary">Continue</Button>
          <a href={ `tel: ${filteredOwner.phoneno}` }>
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