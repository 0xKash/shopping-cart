import styles from "./home.module.css";

const Home = () => (
  <>
    <article className={styles.content}>
      <div className={styles.contentwrapper}>
        <h1 className={styles.hometitle}>New shop New frontiers</h1>
        <button className={styles.button} id={styles.mainbutton}>
          Buy Now
        </button>
      </div>
    </article>
  </>
);

export default Home;
