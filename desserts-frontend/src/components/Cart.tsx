import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../pages/Home";

export type CartItemType = {
  name: string;
  price: number;
};

export type VisibleCartType = {
  item: CartItemType;
  quantity: number;
};

const Cart = () => {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) {
    throw new Error("Something is wrong");
  }
  const { cart } = cartCtx;

  const [visibleCart, setVisibleCart] = useState<VisibleCartType[]>([]);

  useEffect(() => {
    const unique: string[] = [];
    cart.forEach((cartItem) => {
      if (!unique.includes(cartItem.name)) {
        unique.push(cartItem.name);
      }
    });
    let tempCart = []; // TODO
    unique.forEach((dessertName) => {
      let counter: number = 0;
      cart.forEach((cartItem) => {
        if (cartItem.name === dessertName) {
          counter++;
        }
      });
    });
  }, [cartCtx]);

  return (
    <aside className="cart">
      <h2>Your Cart ({cart.length})</h2>
      {cart.map((cartitem) => (
        <CartItem {...cartitem} />
      ))}
    </aside>
  );
};

export default Cart;
