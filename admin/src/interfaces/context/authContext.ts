interface UserObject {
  createdAt: Date;
  email: string;
  updatedAt: Date;
  username: string;
  _id: string;
}

export interface InitialState {
  user: UserObject | null;
  loading: boolean;
  error: Error | null;
}

export interface MyAction {
  type: string;
  payload?: any;
}

export interface MyContext {
  state: InitialState;
  dispatch: React.Dispatch<MyAction>;
}
