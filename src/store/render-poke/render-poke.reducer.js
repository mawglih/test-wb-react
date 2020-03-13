import types from './render-poke.types';

const initialState = {
  poke: [],
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_POKE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        poke: payload,
      };
    case types.GET_POKE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
