import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Features/Products/ProductSlice';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';
import BlogSlice from './Features/Blog/BlogSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
   reducer: {
      product: productSlice.reducer,
      blogs: BlogSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
