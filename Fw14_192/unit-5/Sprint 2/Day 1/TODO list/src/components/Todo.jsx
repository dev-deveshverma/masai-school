import axios from "axios";
import { useEffect, useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoList";
import { Button } from "./Buttons/Button";

export const Todo = ()=>{
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
        axios.get(`http://localhost:3002/todoItems?_limit=3&_page=${page}`).then(res=>{
            setText(res.data);
        })
        
    }
    

    const addTodo = (data)=>{
        fetch("http://localhost:3002/todoItems",{
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
            <h1>Todo List</h1>
            <TodoInput addTodo={addTodo} />
            {
                text.map((e)=>
               ( 
               <TodoItem title={e.title} id={e.id} key={e.id}  />
               ))
            }
            <Button primary className="TaskBtn" onClick={()=>{
                if(page>=1){
                    handleChange(-1);
                }
            }}>Prev</Button>
            <Button primary className="TaskBtn" onClick={()=>{
                handleChange(1);
            }}>Next</Button>
            
        </div>

    )
}