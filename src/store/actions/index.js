import {
  LOADING_SATATES,
  LOADING_SATATES_COMPLETE,
  SET_STATES,
} from "../constants";

export const loadingStates = () => ({
  type: LOADING_SATATES,
});

export const loadingStatesComplete = () => ({
  type: LOADING_SATATES_COMPLETE,
});

export const getStates = (states) => ({
  type: SET_STATES,
  payload: states,
});
