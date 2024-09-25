import { useState } from "react";

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const increase = (): void => {
    setQuantity(quantity + 1);
  };
  const decrease = (): void => {
    setQuantity(quantity - 1);
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
