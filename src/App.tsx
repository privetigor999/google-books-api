import React from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Result } from "./components/Result/Result";
import { useAppSelector } from "./hooks/redux-hooks";
import { Book } from "./components/Book/Book";
import { Loading } from "./components/Loading/Loading";
import { ErrorBlock } from "./components/ErrorBlock/ErrorBlock";

import "./App.css";

function App() {
  const isShowCurrentBook = useAppSelector(
    (state) => state.search.isShowCurrentBook
  );

  const status = useAppSelector((state) => state.search.status);
  return (
    <div className="App">
      <SearchBar />
      {status === "loading" && <Loading />}
      {status === "success" && (isShowCurrentBook ? <Book /> : <Result />)}
      {status === "error" && <ErrorBlock />}
    </div>
  );
}

export default App;
