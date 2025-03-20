import "./App.css";
import styles from "./pages/home/home.module.css";

import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";

function App() {
  // const { items } = useAPI();

  return (
    <div className="content">
      <header className={styles.header}>
        <h1 className={styles.logo}>kash.shop</h1>
        <div className={styles.buttonwrapper}>
          <button className={styles.button}>Home</button>
          <button className={styles.button}>About Us</button>
          <button className={styles.button}>Shop</button>
        </div>
        <button className={styles.button}>Cart</button>
      </header>
      <Shop />
    </div>
  );
}

export default App;
