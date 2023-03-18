import React from "react";

export const useInput = (initValue: string) => {
  const [value, setValue] = React.useState(initValue);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};
