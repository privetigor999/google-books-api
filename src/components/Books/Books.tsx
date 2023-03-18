import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setCurrentBook,
  setIsShowCurrentBook,
} from "../../store/searchReducer/searchReducer";

import { IBook } from "../../types/books";

import NoImagePng from "./../../assets/noimage.png";
import "./books.scss";

export const Books = (props: IBook) => {
  const dispatch = useAppDispatch();
  const image = props.volumeInfo.imageLinks?.thumbnail;
  const categories = props.volumeInfo.categories;
  const authors = props.volumeInfo.authors;
  const title = props.volumeInfo.title;

  const onClickHandler = () => {
    dispatch(setIsShowCurrentBook(true));
    dispatch(setCurrentBook(props));
  };

  return (
    <article className="books" onClick={onClickHandler}>
      {
        <img
          className="books__img"
          src={image ? image : NoImagePng}
          alt="book"
        />
      }
      <span className="books__category">
        {categories?.length > 0 ? categories[0] : "no category"}
      </span>
      {title && <strong className="books__title">{title}</strong>}
      {authors && (
        <ul className="books__authors">
          {authors.map((author) => (
            <li key={author} className="books__author">
              {author}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
