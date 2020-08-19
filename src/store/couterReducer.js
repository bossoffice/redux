import { INCREMENT, DECREMENT, RESET } from "./couterType";

const initialState = {
  couter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        couter: state.couter + 1,
      };
    case DECREMENT:
      return {
        couter: state.couter - 1,
      };
    case RESET:
      return {
        couter: 0,
      };
    default:
      return state;
  }
}
