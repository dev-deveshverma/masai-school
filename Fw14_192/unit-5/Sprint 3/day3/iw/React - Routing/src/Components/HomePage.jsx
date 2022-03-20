import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/products").then((res)=>{
          setData([...res.data])
        })
    },[])
  return (
    <>
      <div
        style={{
          display: "flex",
         flexWrap:"wrap",
          justifyContent: "space-between",
          paddingTop: "100px",
          
        }}
      >
        {/* Iterate over products and show links */}
        {data.map((el) => {
          return <Link to={`/products/${el.id}`} key={el.id} >{
            <div >
              <img src={el.img} alt="" style={{width:"320px", height:"300px"}} />
              <h4>{el.name}</h4>
            </div>
            /* Show product image and name */
            }</Link>;
        })}
      </div>
    </>
  );
};
