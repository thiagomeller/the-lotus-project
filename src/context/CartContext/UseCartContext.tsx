import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  return cartContext;
};
