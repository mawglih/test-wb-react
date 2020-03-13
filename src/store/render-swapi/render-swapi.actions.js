import types from './render-swapi.types';

export const getSwapiRequested = payload => ({ type: types.GET_SWAPI_REQUESTED, payload, });
export const getSwapiSucceeded = payload => {
  return ({ type: types.GET_SWAPI_SUCCEEDED, payload, })
};
export const getSwapiFailed = err => ({ type: types.GET_SWAPI_FAILED, err, });

export default {};
