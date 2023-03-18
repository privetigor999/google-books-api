import React from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { fetchBooks } from "../../store/searchReducer/searchAction";
import { useInput } from "../../hooks/useInput";

import "./input.scss";
import { ReactComponent as SearchSvg } from "./../../assets/search.svg";

interface IInputProps {
  placeholder: string;
  onChange: ActionCreatorWithPayload<any, "search/setSearchValue">;
}

export const Input: React.FC<IInputProps> = ({ placeholder, onChange }) => {
  const ref = React.createRef<HTMLInputElement>();

  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(fetchBooks());
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  const changeValue = useInput("");

  React.useEffect(() => {
    dispatch(onChange(changeValue.value));
  }, [changeValue.value]);

  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="inputBlock">
      <input
        {...changeValue}
        ref={ref}
        onKeyDown={onKeyDownHandler}
        className="inputBlock__input"
        type="text"
        placeholder={placeholder}
      />
      <button className="inputBlock__button" onClick={onClickHandler}>
        <SearchSvg className="inputBlock__img" />
      </button>
    </div>
  );
};
