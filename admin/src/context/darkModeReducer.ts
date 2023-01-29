import { MyAction, ThemeState } from '../interfaces/context/darkModeContext';

const DarkModeReducer = (state: ThemeState, action: MyAction) => {
  switch (action.type) {
    case 'LIGHT': {
      return {
        darkMode: false,
      };
    }
    case 'DARK': {
      return {
        darkMode: true,
      };
    }
    case 'TOGGLE': {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
