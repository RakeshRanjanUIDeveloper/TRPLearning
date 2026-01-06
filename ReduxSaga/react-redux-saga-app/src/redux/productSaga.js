import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    let data = yield fetch('http://localhost:4000/product');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* searchProducts(action) {
  if (!action.query) {
    yield put({ type: PRODUCT_LIST });
    return;
  }

  let response = yield fetch(
    `http://localhost:4000/product?name_like=${encodeURIComponent(action.query)}`
  );

  let result = yield response.json();
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)

}

export default productSaga;