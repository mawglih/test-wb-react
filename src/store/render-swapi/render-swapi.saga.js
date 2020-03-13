import { put, call, takeLatest } from 'redux-saga/effects';
import api from '../../api';
import types from './render-swapi.types';
import  {
  getSwapiSucceeded,
  getSwapiFailed,
} from './render-swapi.actions';


function* getSwapiSaga() {
	try {
    const { results }  = yield call(api.getSwapi);
    yield put(getSwapiSucceeded(results));
	} catch(err) {
		console.log('error in saga', err);
		yield put(getSwapiFailed(err));
	}
}


export default [
	takeLatest(types.GET_SWAPI_REQUESTED, getSwapiSaga),
];
