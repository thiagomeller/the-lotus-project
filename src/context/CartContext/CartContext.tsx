import { createContext } from "react";
import { IProducts } from "../../@types/types";

interface ICartContext {
  cartListItems: IProducts[];
  setCartListItems: (cartListItems: IProducts[]) => void;
}

export const CartContext = createContext<ICartContext>(null!);
