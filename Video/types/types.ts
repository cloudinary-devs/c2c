export type ProductImage =
  | 'product-1'
  | 'product-2'
  | 'product-3'
  | 'product-4'
  | 'product-5'
  | 'product-6'
  | 'product-7'
  | 'product-8'
  | 'product-9'
  | 'product-10'
  | 'product-11';

export type Product = {
  id: number | string;
  name: string;
  price: number;
  description: string;
  discount: boolean;
  available: boolean;
  image: ProductImage;
};
