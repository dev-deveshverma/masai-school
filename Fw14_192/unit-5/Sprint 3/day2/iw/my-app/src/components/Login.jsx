import { useNavigate } from "react-router-dom"

export const Login=()=>{
   const navigate=useNavigate();
   return(
       <div>
           <input type="text" placeholder="Enter UserName" />
           <input type="text" placeholder="Enter User Password" />
           <button onClick={()=>{
               //auth etc token
               //if (succ) {//}
               navigate("/")
           }}>Login</button>
       </div>
   )
     
}  