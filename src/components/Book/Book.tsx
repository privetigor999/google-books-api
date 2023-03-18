import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setIsShowCurrentBook } from "../../store/searchReducer/searchReducer";

import "./book.scss";
import NoImagePng from "./../../assets/noimage.png";

export const Book: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentBook = useAppSelector((state) => state.search.currentBook);

  const checkCountCategories =
    currentBook!.volumeInfo.categories?.length > 1 ? "categories" : "category";

  const checkCountAutors =
    currentBook!.volumeInfo.authors?.length > 1 ? "authors" : "author";

  const onClickHandler = () => {
    dispatch(setIsShowCurrentBook(false));
  };

  return (
    <article className="book">
      <div className="book__imgBlock">
        <img
          className="book__img"
          src={currentBook?.volumeInfo.imageLinks?.thumbnail || NoImagePng}
          alt="book"
        />
      </div>

      <div className="book__infoblock">
        {currentBook!.volumeInfo.title && (
          <div className="book__title">{currentBook?.volumeInfo.title}</div>
        )}
        {currentBook!.volumeInfo.categories?.length > 0 && (
          <div className="book__categories">
            {checkCountCategories}:
            {currentBook?.volumeInfo.categories?.map((category) => (
              <span key={category} className="book__category">
                {category}
              </span>
            ))}
          </div>
        )}

        {currentBook!.volumeInfo.authors?.length > 0 && (
          <div className="book__authors">
            {checkCountAutors}:
            {currentBook?.volumeInfo.authors.map((author) => (
              <p key={author} className="book__author">
                {author}
              </p>
            ))}
          </div>
        )}
        {currentBook?.volumeInfo.description && (
          <div className="book__description">
            {currentBook?.volumeInfo.description}
          </div>
        )}
      </div>

      <button onClick={onClickHandler} className="book__button">
        Go Back
      </button>
    </article>
  );
};
