import ConstantActionTypes from './modal.constants';

const INITIAL_STATE = {
  showModal: false,
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
    default:
      return state;
  }
}

export default modalReducer;