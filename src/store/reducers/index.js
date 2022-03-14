import {
  SET_STATES,
  LOADING_SATATES,
  LOADING_SATATES_COMPLETE,
} from "../constants";

const initialState = {
  states: [],
  loading: true,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATES:
      return {
        ...state,
        states: action.payload,
      };
    case LOADING_SATATES:
      return {
        ...state,
        loading: true,
      };
    case LOADING_SATATES_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default Reducer;
