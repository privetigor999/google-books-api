import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
import { IBook } from "../../types/books";
import { Books } from "../Books/Books";
import { Button } from "../Button/Button";

import "./result.scss";

export const Result: React.FC = React.memo(function Result() {
  const data = useAppSelector((state) => state.search.data);
  const totalItems = useAppSelector((state) => state.search.totalItems);

  const currentCountPaginator = useAppSelector(
    (state) => state.search.currentCountPaginator
  );

  return (
    <div className="result">
      <h6 className="result__title">Найдено книг: {totalItems}</h6>
      <div className="result__list">
        {data?.length > 0 ? (
          data?.map((book: IBook) => <Books key={book.id} {...book} />)
        ) : (
          <h5 className="result__bad">Поиск не дал результатов :(</h5>
        )}
      </div>
      {data && totalItems - currentCountPaginator > 0 && (
        <Button>Load more</Button>
      )}
    </div>
  );
});
