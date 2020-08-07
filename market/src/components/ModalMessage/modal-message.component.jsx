import React from 'react';

import './modal-message.styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'flwww';
import { closeAllModal } from '../../redux/Modal/modal.actions';


const ModalMessage = ({ children, closeAllModal }) => (
  <div className='modal-message'>
    <div className='modal-message_overlay'>
      <div className='modal-message_display'>
        <span onClick={ closeAllModal }>x</span>
        <p>
          { children }
        </p>
        <div className='modal-message_button'>
          <Link to='/dashboard' onClick={closeAllModal}>
            <Button type='primary' style={{color: 'white', marginBottom: '10px'}}>Go to Dashboard</Button>
          </Link>
          <Button type='primary' style={{color: 'white'}} onClick={ closeAllModal }>Register New Business</Button>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  closeAllModal: () => dispatch(closeAllModal())
})

export default connect(null, mapDispatchToProps)(ModalMessage);