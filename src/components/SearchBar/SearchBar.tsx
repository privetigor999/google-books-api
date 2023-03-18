import React from "react";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import {
  setCategory,
  setSearchValue,
  setSortBy,
} from "../../store/searchReducer/searchReducer";
import { categoriesOptions, sortOptions } from "../../data/options";

import "./searchBar.scss";

export const SearchBar: React.FC = () => {
  return (
    <div className="searchBar">
      <h1 className="searchBar__title">Поиск Книг</h1>
      <div className="searchBar__inputBlock">
        <Input onChange={setSearchValue} placeholder="bookname..." />
      </div>

      <div className="searchBar__selects">
        <Select
          label="categories"
          name="categories"
          options={categoriesOptions}
          onChange={setCategory}
        />
        <Select
          label="sort by"
          name="sort"
          options={sortOptions}
          onChange={setSortBy}
        />
      </div>
    </div>
  );
};
