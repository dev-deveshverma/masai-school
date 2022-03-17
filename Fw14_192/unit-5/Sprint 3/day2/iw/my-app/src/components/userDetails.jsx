import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"

export const  UserDetails=()=>{
    const {id}=useParams();
    const [user,setUser]=useState();

    useEffect(()=>{
       axios.get(`https://reqres.i n/api/users/${id}`)
    },[])
    if(true){
        return <Navigate to={"/login"}/>
    }
    return <div>user details o of id:{id}</div>
}