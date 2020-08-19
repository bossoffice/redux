import { FETCH_POST } from "./todoType";

export const fectchPost = (payload) => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: FETCH_POST, payload: response.data });
};
