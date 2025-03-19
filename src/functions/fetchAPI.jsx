import { useEffect } from "react";
import { useState } from "react";

const API_KEY = "https://fakestoreapi.com/products";

const useAPI = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_KEY, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setItems(response))
      .catch((error) => console.error(error));
  }, []);

  return { items };
};

export default useAPI;
