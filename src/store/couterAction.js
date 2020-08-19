import { INCREMENT, DECREMENT, RESET } from "./couterType";

export const increaseCouter = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decreaseCouter = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};

export const resetCouter = (payload) => {
  return {
    type: RESET,
    payload,
  };
};
