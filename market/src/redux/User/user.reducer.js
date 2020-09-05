import ConstantActionTypes from './user.constants';

const INITIAL_STATE = {
  isPending: false,
  errorStatus: null,
  status: null,
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
    case ConstantActionTypes.LOGIN_USER_START || ConstantActionTypes.CREATE_USER_START:
      return {
        ...state,
        isPending: true
      };
    case ConstantActionTypes.LOGIN_USER_SUCCESS || ConstantActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        isPending: false,
        status: action.payload
      };
    case ConstantActionTypes.LOAD_USER:
      return {
        ...state,
        isPending: false,
        errorStatus: null,
        currentUser: action.payload
      }
    case ConstantActionTypes.LOGIN_USER_FAILED || ConstantActionTypes.CREATE_USER_FAILED:
      return {
        ...state,
        isPending: false,
        currentUser: null,
        status: null,
        errorStatus: action.payload
      }
    case ConstantActionTypes.LOGOUT_USER:
      return {
        ...state,
        isPending: false,
        errorStatus: null,
        status: null,
        currentUser: null
      }
    default:
      return state;
  }
}

export default userReducer;