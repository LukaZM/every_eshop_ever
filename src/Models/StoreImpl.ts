import { Store } from "../Interfaces/Store";
import { Category } from "../Interfaces/Category";

export class StoreImpl implements Store{

  categories:Category[];

  getCategories(): Category[] {
    return this.categories;
  }

  constructor(categories:Category[]){
    this.categories = categories;
  }

}