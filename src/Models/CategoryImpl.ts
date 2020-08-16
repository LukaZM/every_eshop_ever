import { Category } from "../Interfaces/Category";
import { Product } from "../Interfaces/Product";

export class CategoryImpl implements Category{

  name:string;
  products:Product[];

  getName(): string {
    return this.name;
  }

  getProducts(): Product[] {
    return this.products;
  }

  constructor(name:string, products:Product[]){
    this.name = name;
    this.products = products;
  }
 
}