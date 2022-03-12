import logo from "./logo.svg";
import "./App.css";

function App() {
  const os_data = [
    { name: "Androit" },
    { name: "BlackBarry" },
    { name: "i Phone" },
    { name: "Window Phone" },
  ];
  const os_dat = [
    { name: "Androit" },
    { name: "BlackBarry" },
    { name: "i Phone" },
    { name: "Window Phone" },
  ];

  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      {os_data.map((header) => {
        return <Data name={header.name} />;
      })}
      <h1>Mobile Operating System</h1>
      {os_dat.map((header) => {
        return <Data name={header.name} />;
      })}
    </div>
  );
}

function Data({ name }) {
  return (
    <div className="out">
      <li>{name}</li>
    </div>
  );
}

export default App;
