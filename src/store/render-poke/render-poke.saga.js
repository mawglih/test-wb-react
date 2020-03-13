import { put, call, takeLatest } from 'redux-saga/effects';
import api from '../../api';
import types from './render-poke.types';
import  {
  getPokeSucceeded,
  getPokeFailed,
} from './render-poke.actions';

function* getPokeSaga() {
	try {
    const { data: { genera} }  = yield call(api.getPoke);
    yield put(getPokeSucceeded(genera));
	} catch(err) {
		console.log('error in saga', err.message);
		yield put(getPokeFailed(err));
	}
}


export default [
	takeLatest(types.GET_POKE_REQUESTED, getPokeSaga),
];
