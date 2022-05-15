import { Action, ContactState } from "../types";

const initialState: ContactState = {
  listContact: {
    data: [],
    isLoading: false,
    error: "",
  },
  addContact: {
    isLoading: false,
    error: "",
  },
  deleteContact: {
    isLoading: false,
    error: "",
  },
  updateContact: {
    isLoading: false,
    error: "",
  },
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case "GET_CONTACT_PENDING": {
      return {
        ...state,
        listContact: {
          ...state.listContact,
          isLoading: true,
        },
      };
    }
    case "GET_CONTACT_SUCCESS": {
      return {
        ...state,
        listContact: {
          ...state.listContact,
          isLoading: false,
          data: payload?.data,
        },
      };
    }
    case "GET_CONTACT_ERROR": {
      return {
        ...state,
        listContact: {
          ...state.listContact,
          isLoading: false,
          error: payload?.error,
        },
      };
    }
    default:
      return state;
  }
};
