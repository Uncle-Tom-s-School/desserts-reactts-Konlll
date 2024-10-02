import { useContext, useState } from "react";
import { CartContext } from "../pages/Home";
import { DessertCardProp } from "./DessertCard";
import { CartItemType } from "./Cart";

const AddToCartButton = (props: DessertCardProp) => {
  const [quantity, setQuantity] = useState<number>(0);
  const cartCtx = useContext(CartContext);
  if (!cartCtx) throw new Error("Nincs context");
  const { cart, setCart } = cartCtx;
  const increase = (): void => {
    setQuantity(quantity + 1);
    setCart([...cart, props]);
  };
  const decrease = (): void => {
    setQuantity(quantity - 1);
    const same: CartItemType[] = cart.filter((item) => item.name == props.name);
    same.pop();
    setCart([...cart.filter((item) => item.name !== props.name), ...same]);
  };

  return (
    <>
      {quantity === 0 ? (
        <div className="add-btn" onClick={increase}>
          Add to Cart
        </div>
      ) : (
        <div className="add-btn used">
          <button onClick={decrease}>-</button>
          {quantity}
          <button onClick={increase}>+</button>
        </div>
      )}
    </>
  );
};

export default AddToCartButton;
