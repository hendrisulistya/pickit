// productData.ts

import { jilbabProducts } from "./jilbab";
import { sandalProduct } from "./sandal";
import { sepatuProduct } from "./sepatu";
import { tasProduct } from "./tas";


export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
};
  
export const productData: Product[] = [
  ...jilbabProducts,
  ...tasProduct,
  ...sandalProduct,
  ...sepatuProduct
  ];
  