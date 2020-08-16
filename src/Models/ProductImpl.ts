import { Product } from "../Interfaces/Product";

export class ProductImpl implements  Product{

  private name:string;
  private image:string;
  private description:string;

  getName(): string {
    return this.name;
  }
  getImage(): string {
    return this.image;
  }
  getDescription(): string {
    return this.description;
  }

  constructor(name:string, image:string, description:string){
    this.name = name;
    this.image = image;
    this.description = description;
  }

}

