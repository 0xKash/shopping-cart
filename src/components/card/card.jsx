import styles from "./card.module.css";

const Card = ({ title, description, price, image }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imagewrapper}>
        <img className={styles.image} src={image} alt="Image" />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>

        <div className={styles.buttonwrapper}>
          <h1>{price}$</h1>
          <button className={styles.button}>Buy now</button>
        </div>
      </div>
    </article>
  );
};

export default Card;
