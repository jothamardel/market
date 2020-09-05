import ConstantActionTypes from './user.constants';


export const logoutUser = () => ({ type: ConstantActionTypes.LOGOUT_USER });

export const loginUserAsync = (number, password) => (dispatch) => {
  dispatch({
    type: ConstantActionTypes.LOGIN_USER_START
  });
  const { REACT_APP_API } = process.env;
  fetch(`${REACT_APP_API}/auth/login-user`, {
    method: "post",
    headers: {
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "origin, x-requested-with, accept",
      "Access-Control-Allow-Origin": "https://the-market-place.vercel.app",
      "Origin": "https://the-market-place.vercel.app",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      number,
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

export const createUserAsync = (firstName, lastName, number, email, city, state, password) => (dispatch) => {
  dispatch({
    type: ConstantActionTypes.LOGIN_USER_START
  });
  const { REACT_APP_API } = process.env;
  fetch(`${REACT_APP_API}/auth/create-user`, {
    method: "post",
    headers: {
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "origin, x-requested-with, accept",
      "Origin": "https://the-market-place.vercel.app",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, number, email, city, state, password })
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: ConstantActionTypes.CREATE_USER_START,
          payload: response.status
        });
        return response.json();
      } else {
        dispatch({
          type: ConstantActionTypes.CREATE_USER_FAILED,
          payload: response.status
        });
        return response.json();
      }
    })
    .then((data) => {
      if (!data || data === 'Incorrect Credentials!' || data === 'login credentials incorrect!') {
        dispatch({
          type: ConstantActionTypes.CREATE_USER_FAILED,
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
        type: ConstantActionTypes.CREATE_USER_FAILED,
        payload: error.status
      });
    })
}