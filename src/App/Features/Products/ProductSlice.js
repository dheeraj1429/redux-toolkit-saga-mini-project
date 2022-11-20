import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const INITAL_STATE = {
   products: null,
   productsFetchLoading: false,
   productsFetchError: null,
};

const productSlice = createSlice({
   name: 'product',
   initialState: INITAL_STATE,
   reducers: {
      fetchProducts: (state, action) => {
         state.productsFetchLoading = true;
         state.productsFetchError = null;
         state.products = null;
      },
      getProductsData: (state, action) => {
         state.products = action.payload;
         state.productsFetchError = null;
         state.productsFetchLoading = false;
      },
   },
   // extraReducers: (builder) => {
   //    builder
   //       .addCase(fetchProducts.pending, (state) => {
   //          state.productsFetchLoading = true;
   //          state.productsFetchError = null;
   //       })
   //       .addCase(fetchProducts.fulfilled, (state, action) => {
   //          state.productsFetchLoading = false;
   //          state.productsFetchError = null;
   //          state.products = action.payload;
   //       })
   //       .addCase(fetchProducts.rejected, (state) => {
   //          state.productsFetchLoading = false;
   //          state.productsFetchError = 'ERROR';
   //       });
   // },
});

// export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
//    const res = await fetch(`https://fakestoreapi.com/products`);
//    const data = await res.json();
//    return data;
// });

// export const { fetchProductsLoading } = productSlice.actions;
export const { fetchProducts, getProductsData } = productSlice.actions;
export default productSlice;
