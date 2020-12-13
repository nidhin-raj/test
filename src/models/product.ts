export interface Product {
  id: string;
  name: string;
  amountInStock: number;
  articles: ProductArticle[];
}

export interface ProductArticle {
  id: string;
  amountRequired: number;
  name: string;
}
