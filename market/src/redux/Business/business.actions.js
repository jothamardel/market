import ConstantActionTypes from './business.constants';


export const getBusinesses = () => (dispatch) => {
  dispatch({ type: ConstantActionTypes.GET_BUSINESSES_START });

  fetch(`${process.env.REACT_APP_API}/`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  })
  .then((response) => {
    if (response.status === 200) {
      dispatch({
        type: ConstantActionTypes.GET_BUSINESSES_SUCCESS,
        payload: response.status
      });
      return response.json();
    } else {
      dispatch({
        type: ConstantActionTypes.GET_BUSINESSES_FAILED,
        payload: response.status
      });
      return;
    }
  })
  .then((data) => {
    if (!data) return;
    dispatch({
      type: ConstantActionTypes.LOAD_BUSINESSES,
      payload: data
    });
  })
  .catch((error) => {
    dispatch({
      type: ConstantActionTypes.GET_BUSINESSES_FAILED,
      payload: error.message
    });
  })
}


export const getAllBusinessAddress = () => (dispatch) => {
  dispatch({ type: ConstantActionTypes.GET_BUSINESSES_ADDRESS_START });

  fetch(`${process.env.REACT_APP_API}/address`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  })
  .then((response) => {
    if (response.status === 200) {
      dispatch({
        type: ConstantActionTypes.GET_BUSINESSES_ADDRESS_SUCCESS,
        payload: response.status
      });
      return response.json();
    } else {
      dispatch({
        type: ConstantActionTypes.GET_BUSINESSES_ADDRESS_FAILED,
        payload: response.status
      });
      return;
    }
  })
  .then((data) => {
    if (!data) return;
    dispatch({
      type: ConstantActionTypes.LOAD_BUSINESSES_ADDRESS,
      payload: data
    });
  })
  .catch((error) => {
    dispatch({
      type: ConstantActionTypes.GET_BUSINESSES_ADDRESS_FAILED,
      payload: error.message
    });
  })
}