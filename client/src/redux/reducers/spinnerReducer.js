import { SHOW_SPINNER, HIDE_SPINNER } from '../actions';

const initialState = {
  show: false,
};

const SpinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        show: true,
      };
    case HIDE_SPINNER:
      return {
        show: false,
      };
    default:
      return state;
  }
};

export default SpinnerReducer;
