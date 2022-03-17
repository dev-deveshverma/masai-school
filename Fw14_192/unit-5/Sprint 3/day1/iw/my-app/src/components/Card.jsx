import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Card = ()=> {
  const { handleCartUpdate } = useContext(CartContext);
  return (
    <div className="card">
      <p> redmi 5a</p>
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
