import styles from "./card.module.css";

const Card = ({ title, price, image, action, value, onChange }) => {
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
            className={styles.input}
            value={value}
            onChange={onChange}
          />
          <button className={styles.button} onClick={action}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
