import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import "./errorBlock.scss";

export const ErrorBlock: React.FC = () => {
  const errorMessage = useAppSelector((state) => state.search.errorMessage);
  return <div className="errorBlock">{errorMessage}. Try again</div>;
};
