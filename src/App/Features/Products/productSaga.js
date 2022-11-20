import { takeEvery, call, put } from 'redux-saga/effects';
import { getProductsData } from './ProductSlice';

function* fetchProducts() {
   const res = yield call(() => fetch(`https://fakestoreapi.com/products`));
   const data = yield res.json();
   yield put(getProductsData(data));
}

function* productSaga() {
   yield takeEvery('product/fetchProducts', fetchProducts);
}

export default productSaga;
