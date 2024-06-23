import { useState } from "react";
import { CartContext } from "./CartContext";
import { IProducts } from "../../@types/types";

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cartListItems, setCartListItems] = useState<IProducts[]>([
    {
      description: "gruuuul",
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
      subtitle: "gruuuul",
      title: "Deck Gruul1",
      value: "49",
    },
    {
      description: "gruuuul",
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
      subtitle: "gruuuul",
      title: "Deck Gruul2",
      value: "49",
    },
    {
      description: "gruuuul",
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
      subtitle: "gruuuul",
      title: "Deck Gruul3",
      value: "49",
    },
    {
      description: "gruuuul",
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
      subtitle: "gruuuul",
      title: "Deck Gruul4",
      value: "49",
    },
    {
      description: "gruuuul",
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
      subtitle: "gruuuul",
      title: "Deck Gruul5",
      value: "49",
    },
    {
      description: "gruuuul",
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
      subtitle: "gruuuul",
      title: "Deck Gruul6",
      value: "49",
    },
  ]);

  return (
    <CartContext.Provider value={{ cartListItems, setCartListItems }}>
      {children}
    </CartContext.Provider>
  );
};
