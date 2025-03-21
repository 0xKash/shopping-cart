import "./App.css";
import styles from "./pages/home/home.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";

import useAPI from "./functions/fetchAPI";

function App() {
  const { name } = useParams();

  const { items } = useAPI();
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const increaseQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  useEffect(() => {
    setCart(items.map((element) => ({ id: element.id, quantity: 0 })));
  }, [items]); // THIS USEFFECT ONLY EXECUTES WHEN WE FETCH THE API OR ITEMS CHANGE

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]); // THE USEFFECT CALCULATES TOTAL QUANTITY ON CARTS

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

        <h1>{totalQuantity < 99 ? totalQuantity : "+99"}</h1>
      </header>
      {name === "shop" ? (
        <Shop array={items} increaseQuantity={increaseQuantity} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
