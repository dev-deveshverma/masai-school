import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  useEffect(()=>{
      console.log("Mounted")
  },[])
  return <div>You are seeling details of Product:{id}</div>;
};
