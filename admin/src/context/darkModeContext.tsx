import { createContext, useReducer, FC } from 'react';
import DarkModeReducer from './darkModeReducer';
import { MyContext, ThemeState } from '../interfaces/context/darkModeContext';

const INITIAL_STATE: ThemeState = {
  darkMode: false,
};

export const DarkModeContext = createContext({} as MyContext);

export const DarkModeContextProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
