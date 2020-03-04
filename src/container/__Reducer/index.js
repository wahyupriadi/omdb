import { combineReducers } from "redux";

const InitialState = {
  onPosterPop: false
};

const posterPopReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "POP_POSTER":
      return { ...state, onPosterPop: true };
    case "CLOSE_POSTER":
      return { ...state, onPosterPop: false };
    default:
      return state;
  }
};

const allReducer = combineReducers({
  posterPop: posterPopReducer
});

export default allReducer;
