import { createContext, useReducer } from 'react';
import { FC } from 'react';
import { InitialState, MyAction, MyContext } from '../interfaces/searchContext';

export const SearchContext = createContext({} as MyContext);

const SearchReducer = (state: InitialState, action: MyAction) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;
    case 'RESET_SEARCH':
      return {} as InitialState;
    default:
      return state;
  }
};

export const SearchContextProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(SearchReducer, {} as InitialState);

  return (
    <SearchContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
