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
      <h1 className={styles.h1}>Lista zakupów produktów</h1>
      <div className={styles.formField}>
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)}
          className={styles.input}
        />
        <button onClick={AddProduct} className={styles.button}>
          DODAJ
        </button>
      </div>
      {isError ? (
        <p className={styles.pError}>Błąd, proszę wprowadzić dane</p>
      ) : null}
      <div className={styles.checkboxParent}>
        <label className={styles.checkboxLabel} htmlFor="checkbox">
          Czy produkt jest owocem?
        </label>
        <input
          type="checkbox"
          id="checkbox"
          value={check}
          onChange={({ target }) => setCheck(target.checked)}
          className={styles.checkbox}
        />
      </div>
    </div>
  );
};

export default Form;
