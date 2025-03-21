import { Link } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <article className={styles.content}>
        <div className={styles.contentwrapper}>
          <h1 className={styles.hometitle}>New shop New frontiers</h1>
          <Link to="/shop">
            <button className={styles.button} id={styles.mainbutton}>
              Buy now
            </button>
          </Link>
        </div>
      </article>
    </>
  );
};

export default Home;
