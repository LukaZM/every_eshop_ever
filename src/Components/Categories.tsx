import React, { useState } from 'react';
import '../App.css';
import { Category } from '../Interfaces/Category';
import { Product } from '../Interfaces/Product';
import Products from './Products'


type CategoryProps = {
  categories: Category[];
}

function Categories({categories}: CategoryProps) {

  const [products, setProducts] = useState<Product[]>(categories[0].getProducts());

  return (
    <div className="cathegory">
      <h1>Cathegories</h1>

      {categories.map((category) => {
        return <button key={category.getName()} onClick={() => setProducts(category.getProducts())}>{category.getName()}</button>
      })}

      <Products products={products} />
    </div>
  );
}

export default Categories;