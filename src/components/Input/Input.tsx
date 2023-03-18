import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
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
  const [isValidValue, setIsValidValue] = React.useState<boolean>(true);
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    if (changeValue.value.trim()) {
      dispatch(fetchBooks());
    } else {
      setIsValidValue(false);
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  const changeValue = useInput("");

  React.useEffect(() => {
    if (isValidValue) {
      dispatch(onChange(changeValue.value));
    }
    setIsValidValue(true);
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
      {!isValidValue && (
        <span className="inputBlock__error">Введите корректное значение</span>
      )}
    </div>
  );
};
