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
    case "DELETE_CONTACT_PENDING": {
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          isLoading: true,
        },
      };
    }
    case "DELETE_CONTACT_SUCCESS": {
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          isLoading: false,
          data: payload?.data,
        },
        listContact: {
          ...state.listContact,
          isLoading: false,
          data: state.listContact.data.filter(
            item => item.email !== payload?.email,
          ),
        },
      };
    }
    case "DELETE_CONTACT_ERROR": {
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          isLoading: false,
          error: payload?.error,
        },
      };
    }
    default:
      return state;
  }
};
