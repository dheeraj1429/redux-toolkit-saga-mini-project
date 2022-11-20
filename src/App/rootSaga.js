import { all } from 'redux-saga/effects';
import productSaga from './Features/Products/productSaga';
import blogSage from './Features/Blog/BlogSaga';

function* rootSaga() {
   yield all([productSaga(), blogSage()]);
}

export default rootSaga;
