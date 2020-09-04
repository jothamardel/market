import ConstantActionTypes from './modal.constants';

const INITIAL_STATE = {
  showModal: false,
  showMessage: false,
  index: null 
}

const modalReducer = (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
    case ConstantActionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
        index: action.payload
      };
    case ConstantActionTypes.EDIT_BUSINESS:
      return {
        showModal: false,
        showMessage: false,
        index: action.payload
      }
    case ConstantActionTypes.SHOW_MESSAGE:
      return {
        ...state,
        showMessage: true
      };
    case ConstantActionTypes.CLOSE_ALL_MODAL:
      return {
        ...state,
        showMessage: false,
        showModal: false,
        index: null
      }
    default:
      return state;
  }
}

export default modalReducer;