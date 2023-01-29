export interface ThemeState {
  darkMode: boolean;
}

export interface MyAction {
  type: string;
  payload?: any;
}

export interface MyContext {
  state: ThemeState;
  dispatch: React.Dispatch<MyAction>;
}
