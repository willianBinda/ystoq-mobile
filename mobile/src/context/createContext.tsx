import React, { useReducer } from 'react';

const createContext = (
  reducer: React.Reducer<any, any>,
  actions: any,
  initial_value: any,
) => {
  const Context = React.createContext<any>(null);

  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initial_value);

    const custon_functions: { [key: string]: (...args: any[]) => void } = {};

    Object.keys(actions).forEach(
      (key) => (custon_functions[key] = actions[key](dispatch)),
    );

    return (
      <Context.Provider value={{ state, ...custon_functions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};

export default createContext;
