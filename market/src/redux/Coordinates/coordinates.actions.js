import ConstantActionTypes from './coordinates.constants';


export const getCoordinates = (lat, lng) => (dispatch) => {
  dispatch({
    type: ConstantActionTypes.GET_COORDINATES,
    payload: {
      lat,
      lng
    }
  })
};