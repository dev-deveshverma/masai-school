import { useContext } from "react"
import { CartContext } from "../context/CartContext"
 
 
export const Navbar=()=>{
    const { cartCount}=useContext(CartContext)

    return (
        <>
        
       <div className="navbar">
        <div>
       <h3>This is a Navbar</h3>

        </div>
       <div>
         <h1> Added in The Cart:  {cartCount}</h1>
        </div>
       </div>
        </>
    )
}