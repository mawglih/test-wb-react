import types from './render-poke.types';

export const getPokeRequested = payload => ({ type: types.GET_POKE_REQUESTED, payload, });
export const getPokeSucceeded = payload => ({ type: types.GET_POKE_SUCCEEDED, payload, });
export const getPokeFailed = err => ({ type: types.GET_POKE_FAILED, err, });

export default {};
