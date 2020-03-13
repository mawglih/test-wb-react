import types from './render-swapi.types';

const initialState = {
  ships: [],
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_SWAPI_SUCCEEDED:
      return {
        ...state,
        loading: false,
        ships: payload,
      };
    case types.GET_SWAPI_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
