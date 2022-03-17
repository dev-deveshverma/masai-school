import { Link } from "react-router-dom"
 
export const Navbar=()=>{
    return(
        <nav>
             <div className="nav">
                 <Link to ="/">Home</Link>
                 <Link to="/about">About</Link>
                 <Link to="users">Users List</Link>
                 <Link to="login">Login</Link>
 
                 
                  
             </div>
        </nav>
    )
} 