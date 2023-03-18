import React from "react";
import HashLoader from "react-spinners/HashLoader";

import "./loading.scss";

export const Loading: React.FC = () => {
  return (
    <div className="loading">
      <HashLoader color="#c2c2c2" />
    </div>
  );
};
