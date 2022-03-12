import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [counter,setCounter]=useState(0);
  const ref=useRef("Masai");
  console.log("Name is",ref.current)
  return (
    <div className='App'>
      <h3>Counter:{counter}</h3>
      <button onClick={()=>{
        setCounter(counter+1);
      }}>
      Add 1
      </button>
          <button
          onClick={()=>{
            ref.current="Masaischool",changed;
            console.log("Name is",ref.current);
          }}>
            Change Name
          </button>
    </div>
  );
}

export default App;
