import React from 'react';
import createContext from './createContext';

const setToken = (dispatch: React.Dispatch<any>) => (token: string) => {
  dispatch({ type: 'token', payload: token });
};

const setAdminFlag =
  (dispatch: React.Dispatch<any>) => (adminFlag: boolean) => {
    dispatch({ type: 'adminFlag', payload: adminFlag });
  };

const setLogged = (dispatch: React.Dispatch<any>) => (bool: boolean) => {
  dispatch({ type: 'logged', payload: bool });
};
const setEmail = (dispatch: React.Dispatch<any>) => (bool: string) => {
  dispatch({ type: 'email', payload: bool });
};

const setSignOut = (dispatch: React.Dispatch<any>) => () => {
  dispatch({ type: 'signOut' });
};

const initialState = {
  token: '',
  logged: false,
  email: '',
  adminFlag: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'token':
      return { ...state, token: action.payload };
    case 'adminFlag':
      return { ...state, adminFlag: action.payload };
    case 'logged':
      return { ...state, logged: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'signOut':
      return initialState;
    default:
      return state;
  }
};

export const { Context, Provider } = createContext(
  reducer,
  {
    setEmail,
    setLogged,
    setToken,
    setSignOut,
    setAdminFlag,
  },
  initialState,
);
