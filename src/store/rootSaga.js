import {
  all,
} from 'redux-saga/effects';
import getSwapiSaga from './render-swapi/render-swapi.saga';
import getPokeSaga from './render-poke/render-poke.saga';

function* rootSaga() {
  yield all([
    ...getSwapiSaga,
    ...getPokeSaga,
  ]);
}

export default rootSaga;
