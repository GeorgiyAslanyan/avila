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
  category?: null | string;
  search?: null | string;
  sortBy?: string;
  order?: "asc" | "desc";
}
