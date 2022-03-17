import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Card2 = ()=> {
  const { handleCartUpdate } = useContext(CartContext);
  return (
    <div className="card">
      <p> redmi 6a</p>
      <button
        onClick={() => {
          handleCartUpdate(1);
        }}
      >
        Buy Now!
      </button>
    </div>
  );
};
