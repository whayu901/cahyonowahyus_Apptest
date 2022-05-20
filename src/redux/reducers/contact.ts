import { Action, ContactState } from "../types";

const initialState: ContactState = {
  listContact: {
    data: [],
    dataTemp: [],
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
          dataTemp: payload?.data,
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
          dataTemp: state.listContact.data.filter(
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
    case "UPDATE_CONTACT_PENDING": {
      return {
        ...state,
        updateContact: {
          ...state.updateContact,
          isLoading: true,
        },
      };
    }
    case "UPDATE_CONTACT_SUCCESS": {
      const tempUsers = [...state.listContact.data];
      const newUsers = tempUsers.map((item, index) => {
        if (item.email !== payload?.data.email) {
          return item;
        }
        if (item.email === payload?.data.email) {
          return payload?.data;
        }
      });
      return {
        ...state,
        updateContact: {
          ...state.updateContact,
          isLoading: false,
          data: payload?.data,
        },
        listContact: {
          ...state.listContact,
          isLoading: false,
          data: newUsers,
          dataTemp: newUsers,
        },
      };
    }
    case "UPDATE_CONTACT_ERROR": {
      return {
        ...state,
        updateContact: {
          ...state.updateContact,
          isLoading: false,
          error: payload?.error,
        },
      };
    }
    case "ADD_CONTACT_PENDING": {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          isLoading: true,
        },
      };
    }
    case "ADD_CONTACT_SUCCESS": {
      const newUsers = [...state.listContact.data, payload?.data];
      return {
        ...state,
        addContact: {
          ...state.addContact,
          isLoading: false,
          data: payload?.data,
        },
        listContact: {
          ...state.listContact,
          isLoading: false,
          data: newUsers,
          dataTemp: newUsers,
        },
      };
    }
    case "ADD_CONTACT_ERROR": {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          isLoading: false,
          error: payload?.error,
        },
      };
    }
    case "SEARCH_CONTACT_SUCCESS": {
      const newUsers: any[] = state.listContact.data.filter(val => {
        return val?.name.toLowerCase().includes(payload?.text?.toLowerCase());
      });

      return {
        ...state,
        listContact: {
          ...state.listContact,
          isLoading: false,
          data: payload?.text === "" ? state.listContact.dataTemp : newUsers,
        },
      };
    }
    default:
      return state;
  }
};
