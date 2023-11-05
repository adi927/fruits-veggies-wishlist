import React from "react";
import styles from "./ListProducts.module.css";

const ListProducts = ({ products, setProducts }) => {
  const DeleteProduct = (newId) => {
    const newProducts = products.filter(({ id }) => id !== newId);
    setProducts(newProducts);
  };

  return (
    <ul className={styles.ul}>
      {products.map(({ title, id, isFruit }) => (
        <li
          className={`${styles.li} ${
            isFruit ? styles.fruit : styles.vegetable
          }`}
          key={id}
        >
          <p>{title}</p>
          <div className={styles.options}>
            <p>{isFruit ? "O" : "W"}</p>
            <button
              onClick={() => {
                DeleteProduct(id);
              }}
              className={styles.deleteButton}
            >
              Usuń
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListProducts;
