import { useState } from "react";
import styles from "./card.module.css";

const Card = ({ id, title, price, image, action }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <article className={styles.card}>
      <div className={styles.imagewrapper}>
        <img className={styles.image} src={image} alt="Image" />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>

        <div className={styles.buttonwrapper}>
          <h1>{price}$</h1>
          <input
            type="number"
            min="1"
            className={styles.input}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            className={styles.button}
            onClick={() => {
              action(id, quantity);
              setQuantity(0);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
