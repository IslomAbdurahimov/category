import { useEffect,useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componint/Navbar/Navbar';
import Contact from './page/Contact/Contact';
import Home from './page/Home/Home';
import Products from './componint/Prodact/Products';
import axios from "axios";

function App() {
  const [data,setData]=useState([])
  const [categ,setCategory]=useState([])
  useEffect(() => {
    
    axios
    .get("http://fakestoreapi.com/products")
    .then((res)=>{
        setData(res.data);
        setCategory(res.data)
    })

}, [])
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home key={data.id} categ={categ} setCategory={setCategory} data={data} />}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='products/:id' element={<Products key={data.id} categ={categ} setCategory={setCategory} data={data}/>}/>
      </Routes>
    </div>
  );
}

export default App;
