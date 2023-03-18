import React from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useInput } from "../../hooks/useInput";

import "./select.scss";

import { IOptions } from "../../data/options";

interface ISelectProps {
  label: string;
  name: string;
  options: IOptions[];
  onChange: ActionCreatorWithPayload<
    any,
    "search/setCategory" | "search/setSortBy"
  >;
}

export const Select: React.FC<ISelectProps> = ({
  label,
  options,
  name,
  onChange,
}) => {
  const dispatch = useAppDispatch();
  const changeOption = useInput(options[0].title);

  React.useEffect(() => {
    dispatch(onChange(changeOption.value));
  }, [changeOption]);

  return (
    <div className="selectBlock">
      <label htmlFor={name}>{label} </label>
      <select
        name={name}
        id={name}
        className="selectBlock__select"
        {...changeOption}
      >
        {options.map((option) => (
          <option key={option.id}>{option.title}</option>
        ))}
      </select>
    </div>
  );
};
