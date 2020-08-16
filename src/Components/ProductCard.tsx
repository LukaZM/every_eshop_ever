import React from 'react'
import {Product} from '../Interfaces/Product'
 
type ProductCardProps = {
  product: Product
}

export function ProductCard({product}: ProductCardProps) {
  return <section>
    <div>{product.getName()}</div>
    <img src={product.getImage()} alt={product.getName()} />
    <p>{product.getDescription()}</p>
  </section>
}