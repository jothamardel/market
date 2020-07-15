import ConstantActionTypes from './register-business.constants';

const INITIAL_STATE = {
  isSending: false,
  status: null
}

const registerReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantActionTypes.REGISTER_BUSINESS_START:
      return {
        ...state,
        isSending: true
      };
    
    case ConstantActionTypes.REGISTER_BUSINESS_SUCCESS:
      return {
        ...state,
        isSending: false,
        status: action.payload
      };
    
    case ConstantActionTypes.REGISTER_BUSINESS_FAILED:
      return {
        ...state,
        isSending: false,
        status: action.payload
      };
    default:
      return state;
  }
}

export default registerReducer;