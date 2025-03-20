import styles from "./shop.module.css";

import Card from "../../components/card/card";
import useAPI from "../../functions/fetchAPI";

const Shop = () => {
  const { items } = useAPI();
  console.log(items);

  return (
    <article className={styles.content}>
      {items.map((element) => (
        <Card
          title={element.title}
          description={element.description}
          price={element.price}
          image={element.image}
        />
      ))}
    </article>
  );
};

export default Shop;
