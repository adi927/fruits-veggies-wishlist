import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import ShoppingList from "./compontents/ShoppingList/ShoppingList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>
);
