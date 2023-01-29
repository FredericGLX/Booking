import { createContext, useEffect, useReducer } from 'react';
import { FC } from 'react';
import {
  InitialState,
  MyAction,
  MyContext,
} from '../interfaces/context/authContext';

const MY_STATE: InitialState = {
  user: JSON.parse(localStorage.getItem('user')!) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext({} as MyContext);

const AuthReducer = (state: InitialState, action: MyAction) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAIL':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthReducer, MY_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
