import axios from "axios";

import { SnackBar } from "../../component/atom";
import { Dispatch } from "../types";

interface Parameters {
  data?: any;
  callback?: any;
  id?: string;
  callbackError?: any;
  text?: string;
}

const url = "https://simple-contact-crud.herokuapp.com/contact";

export const getContact = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: "GET_CONTACT_PENDING" });

    const response: any = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: "GET_CONTACT_SUCCESS",
      payload: {
        data: response.data.data,
      },
    });
  } catch (error) {
    dispatch({
      type: "GET_CONTACT_ERROR",
      payload: { error: "Something with our server !" },
    });
  }
};

export const deleteContact =
  ({ id, callback }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "DELETE_CONTACT_PENDING" });

      await axios.delete(`${url}/${id}`);

      dispatch({
        type: "DELETE_CONTACT_SUCCESS",
        payload: {
          id,
        },
      });
      if (callback) {
        callback();
      }
    } catch (error: any) {
      SnackBar({
        errorText: "Ada Kesalahan Mengambil Data. Coba Lagi !",
      });
      dispatch({
        type: "DELETE_CONTACT_ERROR",
        payload: { error: "Something with our server !" },
      });
    }
  };

export const updateContact =
  ({ data, callback, id }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "UPDATE_CONTACT_PENDING" });

      await axios.put(`${url}/${id}`, data);

      dispatch({
        type: "UPDATE_CONTACT_SUCCESS",
        payload: {
          id,
          data,
        },
      });
      if (callback) {
        callback();
      }
    } catch (error: any) {
      SnackBar({
        errorText: "Ada Kesalahan Mengambil Data. Coba Lagi !",
      });
      dispatch({
        type: "UPDATE_CONTACT_ERROR",
        payload: { error: "Something with our server !" },
      });
    }
  };

export const addContact =
  ({ data, callback }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "ADD_CONTACT_PENDING" });

      await axios.post(`${url}`, data);

      dispatch({
        type: "ADD_CONTACT_SUCCESS",
      });
      if (callback) {
        callback();
      }
    } catch (error) {
      SnackBar({
        errorText: "Ada Kesalahan Mengambil Data. Coba Lagi !",
      });
      dispatch({
        type: "ADD_CONTACT_ERROR",
        payload: { error: "Something with our server !" },
      });
    }
  };

export const searchContact =
  ({ text }: Parameters) =>
  (dispatch: Dispatch) => {
    dispatch({
      type: "SEARCH_CONTACT_SUCCESS",
      payload: {
        text,
      },
    });
  };
