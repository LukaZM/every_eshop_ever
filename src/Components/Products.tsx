import React from 'react';
import '../App.css';
import { Product } from '../Interfaces/Product';
import {ProductCard} from './ProductCard'




type ProductProps = {
  products: Product[];
}

function Products({products}: ProductProps) {

  return (
    <div className="products">
      <h1>Products in category</h1>
        {products.map((product) => {
          return <ProductCard key={product.getName()}product={product} />
        })}
    </div>
  );
}

export default Products;