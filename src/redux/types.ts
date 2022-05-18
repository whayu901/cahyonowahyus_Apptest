interface Payload {
  data?: any;
  error?: any;
  email?: string;
  text?: string;
}

interface Params {
  type?: string;
  payload?: Payload;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Dispatch = (params: Params | Function | any) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload?: Payload;
}

export interface Reducers {
  contact: ContactState;
}

export interface ContactState {
  listContact: {
    data: any[];
    dataTemp: any[];
    isLoading: boolean;
    error: string;
  };
  addContact: {
    isLoading: boolean;
    error: string;
  };
  deleteContact: {
    isLoading: boolean;
    error: string;
  };
  updateContact: {
    isLoading: boolean;
    error: string;
  };
}
