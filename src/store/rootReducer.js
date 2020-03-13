import { combineReducers } from 'redux';
import swapiReducer from './render-swapi/render-swapi.reducer';
import pokeReducer from './render-poke/render-poke.reducer';

export default combineReducers({
  swapi: swapiReducer,
  poke: pokeReducer,
});