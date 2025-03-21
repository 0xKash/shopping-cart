import { useState } from "react";

const useItem = () => {
  const [item, setItem] = useState(0);

  const handleItem = (e) => setItem(e.target.value);

  return { item, setItem, handleItem };
};

export default useItem;
