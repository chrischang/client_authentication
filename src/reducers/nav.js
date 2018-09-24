import { TOGGLE_HAMBURGER } from '../actions/types';

const INITIAL_STATE = {
  isActive: false
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return {
        ...state,
        isActive: !action.payload
      };
    default:
      return state;
  }
};
