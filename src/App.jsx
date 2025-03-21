import "./App.css";
import styles from "./pages/home/home.module.css";
import { Link, useParams } from "react-router-dom";

import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";

function App() {
  const { name } = useParams();

  return (
    <div className="content">
      <header className={styles.header}>
        <h1 className={styles.logo}>kash.shop</h1>
        <div className={styles.buttonwrapper}>
          <Link to="/">
            <button className={styles.button}>Home</button>
          </Link>

          <button className={styles.button}>About Us</button>
          <Link to="/shop">
            <button className={styles.button}>Shop</button>
          </Link>
        </div>
        <button className={styles.button}>Cart</button>
      </header>
      {name === "shop" ? <Shop /> : <Home />}
    </div>
  );
}

export default App;
