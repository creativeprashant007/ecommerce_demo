export interface ProductDataResponse {
  productData: ProductData[];
}

export interface ProductData {
  catName: string;
  products: Product[];
}

export interface Product {
  name: string;
  invoice_number: string;
  price: number;
  image: string;
}
