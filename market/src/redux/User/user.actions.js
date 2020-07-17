import ConstantActionTypes from './user.constants';


export const logoutUser = () => ({ type: ConstantActionTypes.LOGOUT_USER });

export const loginUserAsync = (name, password) => (dispatch) => {
  dispatch({
    type: ConstantActionTypes.LOGIN_USER_START
  });

  fetch(`${process.env.REACT_APP_API}/auth/login-admin`, {
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      password
    })
  })
  .then((response) => {
    if (response.status === 200) {
      dispatch({
        type: ConstantActionTypes.LOGIN_USER_SUCCESS,
        payload: response.status
      });
      return response.json();
    } else {
      dispatch({
        type: ConstantActionTypes.LOGIN_USER_FAILED,
        payload: response.status
      });
      return response.json();
    }
  })
  .then((data) => {
    if (!data || data === 'Incorrect Credentials!' || data === 'login credentials incorrect!') {
      dispatch({
        type: ConstantActionTypes.LOGIN_USER_FAILED,
        payload: data
      })
      return;
    } 
    dispatch({
      type: ConstantActionTypes.LOAD_USER,
      payload: data
    });
  })
  .catch((error) => {
    dispatch({
      type: ConstantActionTypes.LOGIN_USER_FAILED,
      payload: error.status
    });
  })
}