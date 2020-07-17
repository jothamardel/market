import ConstantActionTypes from './business.constants';

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: null,
  status: null,
  business: null,
  address: null
}

const businessReducer = (state = INITIAL_STATE, action = {}) => {
  
  switch (action.type) {
    case ConstantActionTypes.GET_BUSINESSES_START ||
    ConstantActionTypes.GET_BUSINESSES_ADDRESS_START:
      return {
        ...state,
        isLoading: true
      };
    case ConstantActionTypes.GET_BUSINESSES_SUCCESS ||
    ConstantActionTypes.GET_BUSINESSES_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: action.payload
      };
    case ConstantActionTypes.LOAD_BUSINESSES:
      return {
        ...state,
        isLoading: false,
        business: action.payload,
        errorMessage: null
      };
    case ConstantActionTypes.LOAD_BUSINESSES_ADDRESS:
      return {
        ...state,
        isLoading: false,
        address: action.payload,
        errorMessage: null
      }
    case ConstantActionTypes.GET_BUSINESSES_FAILED ||
    ConstantActionTypes.GET_BUSINESSES_ADDRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        status: null,
        business: null
      }
    default:
      return state;
  }
}

export default businessReducer;