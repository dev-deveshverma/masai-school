import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
   const [error,setError]=useState(null);

    const navigate = useNavigate();
    useEffect(()=>{
      axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
        setProduct([res.data]);
      }).catch((e)=>{   
           setError(e)
      })
    }, [])
 if(error){
   return(
     <h1>Product does not exist</h1>
   )
 }
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        {
          product.map((el)=>{
            return(
              <div key={el.id} >
                {console.log(el)}
                  <img src={el.img} alt="" style={{width:"200px", height:"200px"}} />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{el.name}</h2>
            <h5 className="productPrice">Price : {el.price}</h5>
          </div>
          <h5>Specifications : {el.spec}</h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
          </div>
        </div>
              </div>
            )
          })
        }
        
      </div>
    </>
  );
};
