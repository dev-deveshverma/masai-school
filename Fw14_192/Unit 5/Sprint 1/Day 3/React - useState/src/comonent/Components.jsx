
import React,{useState} from "react";

export function Counter(){
    const [count,setCounter]=React.useState(0)
  const incrvalue=(value)=>{
      if(value==2){
          setCounter(count*value)
      }
      else if(value==0){
          setCounter(0)
      }
      else {
          
             setCounter(count+value)
      }

  }
  
  return(
    <div className="App">
      <h1>COUNTER</h1>
      <h2>{count}</h2>
      <button onClick={()=>incrvalue(1)}> ADD</button>
      <button onClick={()=>incrvalue(-1)}>SUB</button>
      <button onClick={()=>incrvalue(2)}>Dubble</button>
      <button onClick={()=>incrvalue(0)}>ReSet</button>
      </div>

  )
}