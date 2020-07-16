import ConstantActionTypes from './coordinates.constants';

const INTIAL_STATE = {
  location: null
};

const coordReducer = (state = INTIAL_STATE, action = {}) => {

  switch (action.type) {
    case ConstantActionTypes.GET_COORDINATES:
      return {
        ...state,
        location: action.payload
      };
      
    default:
      return state;
  }
}

export default coordReducer;
