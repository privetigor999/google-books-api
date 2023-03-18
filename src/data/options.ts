export const categoriesOptions: IOptions[] = [
  { id: 1, title: "all" },
  { id: 2, title: "art" },
  { id: 3, title: "biography" },
  { id: 4, title: "computers" },
  { id: 5, title: "history" },
  { id: 6, title: "medical" },
  { id: 7, title: "poetry" },
];
export const sortOptions: IOptions[] = [
  { id: 1, title: "relevance" },
  { id: 2, title: "newest" },
];

export interface IOptions {
  id: number;
  title: string;
}
