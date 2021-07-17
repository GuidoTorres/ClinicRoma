import { types } from '../types/types';

const initialState = {
  checking: false,
  role: { id: 0, name: null },
  clinic_type: { id: 0, detail: '' },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: true,
      };
    case types.authCheckingFinish:
      return {
        ...state,
        checking: true,
      };
    case types.authLogout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};

export { authReducer };
