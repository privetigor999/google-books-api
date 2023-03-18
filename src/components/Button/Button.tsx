import React from "react";
import { BeatLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchMoreBooks } from "../../store/searchReducer/searchAction";

import "./button.scss";

interface IButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const statusPaginator = useAppSelector(
    (state) => state.search.statusPaginator
  );

  const handleClickLoadMore = () => {
    dispatch(fetchMoreBooks());
  };
  return (
    <button
      onClick={handleClickLoadMore}
      className="button"
      disabled={statusPaginator === "loading"}
    >
      {statusPaginator !== "loading" ? (
        children
      ) : (
        <BeatLoader size={10} color="#ffffff" />
      )}
    </button>
  );
};
