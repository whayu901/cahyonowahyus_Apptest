import axios from "axios";

import { Dispatch } from "../types";

interface Parameters {
  data?: any;
  callback?: any;
  email?: string;
  callbackError?: any;
  text?: string;
}

export const getContact = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: "GET_CONTACT_PENDING" });

    const response: any = await axios.get(
      "https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/content.json",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );

    dispatch({
      type: "GET_CONTACT_SUCCESS",
      payload: {
        data: response.data,
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
  ({ email, callback }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "DELETE_CONTACT_PENDING" });

      dispatch({
        type: "DELETE_CONTACT_SUCCESS",
        payload: {
          email,
        },
      });
      if (callback) {
        callback();
      }
    } catch (error) {
      dispatch({
        type: "DELETE_CONTACT_ERROR",
        payload: { error: "Something with our server !" },
      });
    }
  };

export const updateContact =
  ({ data, callback }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "UPDATE_CONTACT_PENDING" });

      dispatch({
        type: "UPDATE_CONTACT_SUCCESS",
        payload: {
          data,
        },
      });
      if (callback) {
        callback();
      }
    } catch (error) {
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

      dispatch({
        type: "ADD_CONTACT_SUCCESS",
        payload: {
          data,
        },
      });
      if (callback) {
        callback();
      }
    } catch (error) {
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
