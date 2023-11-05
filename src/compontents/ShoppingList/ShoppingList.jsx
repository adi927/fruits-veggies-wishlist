import React, { useState } from "react";
import Form from "../Form/Form";
import ListProducts from "../ListProducts/ListProducts";
import styles from "./ShoppingList.module.css";

const ShoppingList = () => {
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState("");

  return (
    <div className={styles.wrapper} style={{ backgroundColor: color }}>
      <Form setProducts={setProducts} products={products} />
      <ListProducts
        products={products}
        setColor={setColor}
        setProducts={setProducts}
      />
    </div>
  );
};

export default ShoppingList;
