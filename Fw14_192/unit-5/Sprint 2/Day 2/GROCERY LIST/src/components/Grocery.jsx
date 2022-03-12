import axios from "axios";
import { useEffect, useState } from "react"
import { TodoInput } from "./GroceryInput"
import { TodoItem } from "./GroceryList";

export  const Grocery = ()=>{
    const [text, setText]= useState([]);
    const [page, setPage]= useState(1);

    const handleChange = (data)=>{
        if((page+data)<=text.length){
            setPage(page + data);
        }
    }

    useEffect(()=>{
        getData();
    }, [page]);

    const getData = ()=>{
        axios.get(`http://localhost:3001/todoItems`).then(res=>{
            setText(res.data);
        })
        
    }
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:3001/todoItems/${id}`).then(()=>{
            setText(text.filter(e=>e.id!==id))
        })
    }

    const addTodo = (data)=>{
        fetch("http://localhost:3001/todoItems",{
            method: "POST",
            body: JSON.stringify({
                title:data,
                purchased:false
            }),
            headers: {
                "content-type": "application/json"
            }
            
        }).then(()=>{
            getData();
        })
      
    }
    
    return (
        <div>
            <h1>Grocery Items</h1>
            <TodoInput addTodo={addTodo} />
            {
                text.map((e)=>
               ( 
               <TodoItem title={e.title} id={e.id} key={e.id} handleDelete={handleDelete} />
               ))
            }
            
            
        </div>

    )
}