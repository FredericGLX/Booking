import { bookingOptions } from './interfaces';

interface DateObject {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface InitialState {
  city: string;
  dates: [DateObject];
  options: bookingOptions;
}

export interface MyAction {
  type: string;
  payload: any;
}

export interface MyContext {
  state: InitialState;
  dispatch: React.Dispatch<MyAction>;
}
