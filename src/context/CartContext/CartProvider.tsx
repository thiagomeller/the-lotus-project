import { useState } from "react";
import { CartContext } from "./CartContext";
import { IProducts } from "../../@types/types";

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cartListItems, setCartListItems] = useState<IProducts[]>([
   
  ]);

  return (
    <CartContext.Provider value={{ cartListItems, setCartListItems }}>
      {children}
    </CartContext.Provider>
  );
};
