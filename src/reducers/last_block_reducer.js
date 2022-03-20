import { RECEIVE_LAST_BLOCK } from '../actions/stats_actions';

const lastBlockReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LAST_BLOCK:
      return action.lastBlock;
    default:
      return state;
  }
};

export default lastBlockReducer;
