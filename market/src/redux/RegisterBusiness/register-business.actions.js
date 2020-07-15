import ConstantActionTypes from './register-business.constants';

export const registerBusinessAsync = (
  businessowner, businessname,
  phoneno, email, category,
  latitude, longitude, registered, rcNumber,
  city, state, address, tag
) => (dispatch) => {
  dispatch({ type: ConstantActionTypes.REGISTER_BUSINESS_START });
  
  fetch(`${process.env.REACT_APP_API}/business`, {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        owner: businessowner,
        businessname, phoneno, email, category, latitude, longitude,
        registered, rcNumber, city, state, address, tag
      })
    })
    .then(response => {
      dispatch({
        type: ConstantActionTypes.REGISTER_BUSINESS_SUCCESS,
        payload: response.status
      })
      return response.json()
    })
    .then(data => console.log(data))
    .catch(error => {
      dispatch({
        type: ConstantActionTypes.REGISTER_BUSINESS_FAILED,
        payload: error.message
      })
    })
};