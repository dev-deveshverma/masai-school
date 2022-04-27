import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getdata = () => {
    axios
      .get(
        "https://www.omdbapi.com/?apikey=199dc310&s=avengers"
      )
      .then(res => {
        setData([...res.data.Search]);
      });
  };

  const search =()=>{
    let value=document.getElementById("value").value;
    axios.get(`https://www.omdbapi.com/?apikey=199dc310&s=${value}`).then((res)=>{
      setData([...res.data.Search]);
    })
  }
  console.log(data);
  useEffect(() => {
    getdata();
  }, []);
let wait;
  let debounce=(func,delay)=>{
    if(wait){
      clearTimeout(wait);
    }
    wait=setTimeout(()=>{
        func()
    }, delay)
  }
  return (
    <div className="App">
      <input type="text" id="value" onChange={()=>debounce(search,3000)} placeholder="Search Movie" />
      <div className="container">
        {data.map(({ Title, Poster }, index) => (
          <div key={index} className="moviecart">
            <img src={Poster} alt="" />
            <h2>{Title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
