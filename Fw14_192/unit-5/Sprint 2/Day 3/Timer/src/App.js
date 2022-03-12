import "./App.css";
import { useEffect,useState } from "react";
import { Stopwatch } from "./components/stopwatch";

function App() {
  const [show,setShow]=useState(true);
  return (
    <div className="App">
      {show ? <Stopwatch /> : null}
      <button
        onClick={() => {
          setShow(show ? false : true);
        }}
      >
        {show ? "Restart" : "Start"}
      
      </button>
    </div>
  );
}
      
export default App;


