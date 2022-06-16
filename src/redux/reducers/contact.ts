import { Action, ContactState } from "../types";
import { applySortFilter } from "../../helpers";

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
        },
        listContact: {
          ...state.listContact,
          isLoading: false,
          data: state.listContact.data.filter(item => item.id !== payload?.id),
          dataTemp: state.listContact.data.filter(
            item => item.id !== payload?.id,
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
        if (item.id !== payload?.id) {
          return item;
        }
        if (item.id === payload?.id) {
          const data = payload?.data;
          data.id = payload?.id;

          return data;
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
      return {
        ...state,
        addContact: {
          ...state.addContact,
          isLoading: false,
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
      const newUsers: any[] = applySortFilter(
        state.listContact.data,
        payload?.text?.toLocaleLowerCase(),
      );

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
