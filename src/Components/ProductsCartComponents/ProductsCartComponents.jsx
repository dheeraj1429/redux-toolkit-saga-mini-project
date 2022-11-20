import React from 'react';
import { useSelector } from 'react-redux';

function ProductsCartComponents() {
   const { products, productsFetchLoading } = useSelector((state) => state.product);
   return (
      <div class="grid grid-cols-4 gap-4 p-5">
         {!!productsFetchLoading ? (
            <h1>Loading...</h1>
         ) : !!products && !productsFetchLoading ? (
            products.map((el) => (
               <div className="p-3 shadow rounded-sm text-center">
                  <img className="w-40 mx-auto mb-2" src={el.image} alt="" />
                  <p>{el.title}</p>
                  <p>Price : {el.price}</p>
                  <h2>{el.description}</h2>
                  <span>category</span>
               </div>
            ))
         ) : null}
      </div>
   );
}

export default ProductsCartComponents;
