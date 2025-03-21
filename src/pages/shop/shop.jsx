import styles from "./shop.module.css";

import Card from "../../components/card/card";
import useAPI from "../../functions/fetchAPI";
import { useState, useEffect } from "react";

const Shop = () => {
  const { items } = useAPI();

  const [cart, setCart] = useState([]);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  useEffect(() => {
    setCart(items.map((element) => ({ id: element.id, quantity: 0 })));
  }, [items]); // THIS USEFFECT ONLY EXECUTES WHEN WE FETCH THE API OR ITEMS CHANGE

  return (
    <article className={styles.content}>
      {items.map((element) => (
        <Card
          key={element.id}
          title={element.title}
          description={element.description}
          price={element.price}
          image={element.image}
          action={(e) => {
            increaseQuantity(element.id);
            console.log(e.target);
          }}
        />
      ))}
    </article>
  );
};

export default Shop;
