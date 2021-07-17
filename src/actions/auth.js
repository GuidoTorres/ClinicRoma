import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';

const startLogin = (username, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      'auth/login',
      { username, password },
      'POST'
    );
    const body = await resp.json();
    console.log(body);
    if (body.access_token) {
      localStorage.setItem('token', body.access_token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(
        login({
          clinic_type: body.clinic_type,
          role: body.role,
        })
      );
    } else {
      Swal.fire('Error', body.error);
    }
  };
};

const startCkecking = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token') || '';
    const resp = await fetchConToken('auth/refresh', { token }, 'POST');
    const body = await resp.json();
    if (body.access_token) {
      localStorage.setItem('token', body.access_token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(
        login({
          clinic_type: body.clinic_type,
          role: body.role,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

const login = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};

const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });

export { startLogin, startLogout, startCkecking };
