export type Item = {
  id: number;
  title: string;
  price: number;
  img: string[];
  createdAt?: string;
  category?: string;
  description?: string;
};

export interface ItemsApi {
  limit?: number;
  page?: number;
  category?: undefined | string;
  search?: undefined | string;
  sortBy?: undefined | 'createdAt' | 'price';
  order?: undefined | "asc" | "desc";
}
