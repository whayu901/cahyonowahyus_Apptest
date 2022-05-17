import axios from "axios";

import { Dispatch, GetState } from "../types";

interface Parameters {
  data?: any;
  callback?: any;
  email?: string;
  callbackError?: any;
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
  ({ email }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "DELETE_CONTACT_PENDING" });

      dispatch({
        type: "DELETE_CONTACT_SUCCESS",
        payload: {
          email,
        },
      });
    } catch (error) {
      dispatch({
        type: "DELETE_CONTACT_ERROR",
        payload: { error: "Something with our server !" },
      });
    }
  };
