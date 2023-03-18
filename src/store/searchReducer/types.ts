import { IBook } from "../../types/books";

export interface ISearchState {
  searchValue: string;
  category: string;
  sortBy: string;
  totalItems: number;
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  data: IBook[] | null;
  currentBook: IBook | null;
  isShowCurrentBook: boolean;
  stepPaginator: number;
  currentCountPaginator: number;
  statusPaginator: "idle" | "loading" | "success" | "error";
}
