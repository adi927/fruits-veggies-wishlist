import React from "react";
import styles from "./ListProducts.module.css";

const ListProducts = ({ products, setColor, setProducts }) => {
  const DeleteProduct = (newId) => {
    const newProducts = products.filter(({ id }) => id !== newId);
    setProducts(newProducts);
  };

  return (
    <ul className={styles.ul}>
      {products.map(({ title, id, isFruit, product }) => (
        <li
          className={`${styles.li} ${
            isFruit ? styles.fruit : styles.vegetable
          }`}
          onClick={() => {
            DeleteProduct(id);
          }}
          key={id}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default ListProducts;
