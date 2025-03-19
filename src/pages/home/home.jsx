import styles from "./home.module.css";

const Home = () => (
  <>
    <header className={styles.header}>
      <h1 className={styles.logo}>kash.shop</h1>
      <div>
        <button>Home</button>
        <button>About Us</button>
        <button>Shop</button>
      </div>
    </header>
  </>
);

export default Home;
