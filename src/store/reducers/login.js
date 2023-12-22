import { AUDIO_ACTIONS } from "../actions/audio";

const initialState = {
  // initial state
};

function audioReducer(state = initialState, action) {
  switch (action.type) {
    // handle different actions
    case AUDIO_ACTIONS.AUDIO_INITIALIZE: {
      break;
    }

    case AUDIO_ACTIONS.AUDIO_INITIALIZED: {
      break;
    }

    default:
      return state;
  }
}

export default audioReducer;
