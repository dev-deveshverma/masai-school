import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/about';
import { Hello } from './components/hello';
import { Navbar } from './components/navbar';
import { ProductDetails } from './components/ProductDetails';
import { Users } from './components/Users';
import { UserDetails } from './components/userDetails';
import { Login } from './components/Login';

function App() {
   
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      
      <Route path='/' element={<Hello/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/users/:id' element={<UserDetails/>}/>
     <Route path='login/'element={<Login/>}/>
      <Route path='/Product/:id' element={<ProductDetails/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
