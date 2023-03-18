import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks, fetchMoreBooks } from "./searchAction";

import { ISearchState } from "./types";

const initialState: ISearchState = {
  searchValue: "",
  category: "all",
  sortBy: "relevance",
  totalItems: 0,
  status: "idle",
  errorMessage: "",
  data: null,
  currentBook: null,
  isShowCurrentBook: false,
  currentCountPaginator: 30,
  stepPaginator: 30,
  statusPaginator: "idle",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (
      state,
      action: PayloadAction<ISearchState["searchValue"]>
    ) => {
      state.searchValue = action.payload;
    },
    setCategory: (state, action: PayloadAction<ISearchState["category"]>) => {
      state.category = action.payload;
    },
    setSortBy: (state, action: PayloadAction<ISearchState["sortBy"]>) => {
      state.sortBy = action.payload;
    },
    setIsShowCurrentBook: (state, action) => {
      state.isShowCurrentBook = action.payload;
    },
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
    changeCurrentCountPaginator: (state) => {
      state.currentCountPaginator += state.stepPaginator;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.errorMessage = "";
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.data = action.payload[0];
        state.totalItems = action.payload[1];
        state.status = "success";
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.data = null;
        state.status = "error";
      })
      .addCase(fetchMoreBooks.pending, (state) => {
        state.errorMessage = "";
        state.statusPaginator = "loading";
      })
      .addCase(fetchMoreBooks.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
        state.statusPaginator = "success";
      })
      .addCase(fetchMoreBooks.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.data = null;
        state.statusPaginator = "error";
      });
  },
});

export const {
  setSearchValue,
  setCategory,
  setSortBy,
  setIsShowCurrentBook,
  setCurrentBook,
  changeCurrentCountPaginator,
} = searchSlice.actions;
export default searchSlice.reducer;
