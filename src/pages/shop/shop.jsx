import styles from "./shop.module.css";

import Card from "../../components/card/card";

const Shop = ({ array, increaseQuantity, check }) => {
  return (
    <article className={styles.content}>
      {array.map((element) => (
        <Card
          id={element.id}
          key={element.id}
          title={element.title}
          description={element.description}
          price={element.price}
          image={element.image}
          action={increaseQuantity}
          check={check}
        />
      ))}
    </article>
  );
};

export default Shop;
