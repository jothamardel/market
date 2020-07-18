import ConstantActionTypes from './business.constants';

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: null,
  status: null,
  business: null,
  address: null,
  owner: null,
  coord: null,
  tag: null
}

const businessReducer = (state = INITIAL_STATE, action = {}) => {
  
  switch (action.type) {
    case 
    ConstantActionTypes.GET_BUSINESSES_START ||
    ConstantActionTypes.GET_BUSINESSES_ADDRESS_START ||
    ConstantActionTypes.GET_BUSINESS_OWNER_START ||
    ConstantActionTypes.GET_BUSINESS_COORD_START ||
    ConstantActionTypes.GET_BUSINESS_TAG_START:
      return {
        ...state,
        isLoading: true
      };
    case 
    ConstantActionTypes.GET_BUSINESSES_SUCCESS ||
    ConstantActionTypes.GET_BUSINESSES_ADDRESS_SUCCESS ||
    ConstantActionTypes.GET_BUSINESS_OWNER_SUCCESS ||
    ConstantActionTypes.GET_BUSINESS_COORD_SUCCESS ||
    ConstantActionTypes.GET_BUSINESS_TAG_SUCCESS:
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
    case ConstantActionTypes.LOAD_BUSINESSES_OWNER:
      return {
        ...state,
        isLoading: false,
        owner: action.payload,
        errorMessage: null
      };
    case ConstantActionTypes.LOAD_BUSINESSES_COORD:
      return {
        ...state,
        isLoading: false,
        coord: action.payload,
        errorMessage: null  
      }
    case ConstantActionTypes.LOAD_BUSINESSES_TAG:
      return {
        ...state,
        isLoading: false,
        tag: action.payload,
        errorMessage: null  
      }
    case 
    ConstantActionTypes.GET_BUSINESSES_FAILED ||
    ConstantActionTypes.GET_BUSINESSES_ADDRESS_FAILED ||
    ConstantActionTypes.GET_BUSINESS_OWNER_FAILED ||
    ConstantActionTypes.GET_BUSINESS_COORD_FAILED ||
    ConstantActionTypes.GET_BUSINESS_TAG_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        status: null
      }
    default:
      return state;
  }
}

export default businessReducer;