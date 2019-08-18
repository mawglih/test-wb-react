import {
  all,
} from 'redux-saga/effects';
import { getProductsSaga } from './products/products.saga';

function* rootSaga() {
  yield all([
    ...getProductsSaga,
  ]);
}

export default rootSaga;
