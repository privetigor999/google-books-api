import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IBook } from "../../types/books";
import {
  changeCurrentCountPaginator,
  setIsShowCurrentBook,
} from "./searchReducer";

import { ISearchState } from "./types";

export const fetchBooks = createAsyncThunk<
  IBook[],
  void,
  {
    rejectValue: string;
    state: {
      search: ISearchState;
    };
  }
>("search/fetchBooks", async (_, { getState, rejectWithValue, dispatch }) => {
  const { searchValue, category, sortBy, stepPaginator } = getState().search;
  dispatch(setIsShowCurrentBook(false));

  const checkCategory = category === "all" ? "" : `subject:${category}`;

  try {
    const response = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}` +
        checkCategory +
        `&orderBy=${sortBy}` +
        `&${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}` +
        `&maxResults=${stepPaginator}`
    );

    const data = response.data;
    const items = data.items;
    const totalItems = data.totalItems;
    return [items, totalItems];
  } catch (e) {
    return rejectWithValue((e as AxiosError).message);
  }
});

export const fetchMoreBooks = createAsyncThunk<
  IBook[],
  void,
  {
    rejectValue: string;
    state: {
      search: ISearchState;
    };
  }
>(
  "search/fetchMoreBooks",
  async (_, { getState, dispatch, rejectWithValue }) => {
    const {
      searchValue,
      category,
      sortBy,
      currentCountPaginator,
      stepPaginator,
    } = getState().search;

    const checkCategory = category === "all" ? "" : `subject:${category}`;

    dispatch(changeCurrentCountPaginator());
    try {
      const response = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}` +
          checkCategory +
          `&startIndex=${currentCountPaginator}` +
          `&orderBy=${sortBy}` +
          `&${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}` +
          `&maxResults=${stepPaginator}`
      );

      const data = response.data;
      const items = data.items;
      return items;
    } catch (e) {
      return rejectWithValue((e as AxiosError).message);
    }
  }
);
