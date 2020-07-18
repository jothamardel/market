import React, { Component } from "react";
import { Modal, Button } from "flwww";
import { connect } from "react-redux";
import { showModal } from "../../redux/Modal/modal.actions";

class ShowModal extends Component {
 
 
  render(){
    
    const { showModal, index } = this.props.modal;
    const { business: { business, address, owner, coord, tag } } = this.props;
   
    return (
      <div>

        <Modal
          isVisible={ showModal }
          toggleModal={ this.props.showModal }
          >

          <h3>{ business[index].name }</h3>
          <h3> RC Number: { business[index].rc_number }</h3>
          <hr></hr>
          <p> Owner: { owner[index].name }</p>
          <p> Phone No: { owner[index].phoneno }</p>
          <p> email: { owner[index].email }</p>
          <hr></hr>
          <p>Address: { address[index].address }</p>
          <p>City: { address[index].city }</p>
          <p>State: { address[index].state }</p>
          <hr></hr>
          <p>Latitude: { coord[index].lat }</p>
          <p>Longitude: { coord[index].lng }</p>
          <hr></hr>
          <p>Category: { tag[index].category }</p>
          <p>Tag: { tag[index].tag }</p>


          <Button onClick={ this.props.showModal } type="primary">Continue</Button>
          <a href={ `tel: ${owner[index].phoneno}` }>
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