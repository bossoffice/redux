import { FETCH_POST } from "./todoType";

const initialState = {
  todo: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log("state : ", state);
      console.log("action : ", action);
      return {
        todo: [...state, action.payload],
      };
    default:
      return state;
  }
}
