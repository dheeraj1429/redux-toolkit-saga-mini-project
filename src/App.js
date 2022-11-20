import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './App/Features/Products/ProductSlice';
import ProductsCartComponents from './Components/ProductsCartComponents/ProductsCartComponents';
import { fetchBlogs } from './App/Features/Blog/BlogSlice';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
      dispatch(fetchBlogs());
   }, []);

   return (
      <div>
         <ProductsCartComponents />
      </div>
   );
}

export default App;
