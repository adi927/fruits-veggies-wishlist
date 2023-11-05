import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ setProducts, products }) => {
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);

  const AddProduct = () => {
    if (input === "") {
      setIsError(true);
    } else {
      setIsError(false);
      const product = {
        title: input,
        isFruit: check,
        id: Math.random(),
      };

      setProducts([...products, product]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Lista zakupów owoców</h1>
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
        className={styles.input}
      />
      <button onClick={AddProduct} className={styles.button}>
        KLIKAJ
      </button>
      <label className={styles.checkboxLabel}>
        <p className={styles.p}>Czy produkt jest owocem?</p>
        <input
          type="checkbox"
          value={check}
          onChange={({ target }) => setCheck(target.checked)}
          className={styles.checkbox}
        />
      </label>
      {isError ? <p>BŁĄD</p> : null}
    </div>
  );
};

export default Form;
