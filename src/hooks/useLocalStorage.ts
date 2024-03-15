import { useState, useEffect } from "react";

const PREFIX: string = `CodePen-Clone-`;

const useLocalStorage = (key: string, initialValue: any) => {
  let Prefix_Label = PREFIX + key;

  const [value, setValue] = useState(() => {
    let jsonValue = localStorage.getItem(Prefix_Label);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(Prefix_Label, JSON.stringify(value));
  }, [Prefix_Label, value]);

  return [value, setValue];
};

export default useLocalStorage;
