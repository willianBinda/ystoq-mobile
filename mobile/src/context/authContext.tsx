import React from 'react';
import createContext from './createContext';

const setToken = (dispatch: React.Dispatch<any>) => (token: string) => {
  dispatch({ type: 'token', payload: token });
};

const setLogged = (dispatch: React.Dispatch<any>) => (bool: boolean) => {
  dispatch({ type: 'logged', payload: bool });
};
const setEmail = (dispatch: React.Dispatch<any>) => (bool: string) => {
  dispatch({ type: 'email', payload: bool });
};

const initialState = {
  token: '',
  logged: false,
  email: '',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'token':
      return { ...state, token: action.payload };
    case 'logged':
      return { ...state, logged: action.payload };
    case 'email':
      return { ...state, email: action.payload };
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
  },
  initialState,
);
