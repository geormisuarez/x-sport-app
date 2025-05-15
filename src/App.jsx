
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailComtainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListConteiner greeting= 'Bienvenidos a Xtreme Sport'/>}/>
      <Route path='/category/:categoryId' element={<ItemListConteiner greeting='Categoria: '/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
    </Routes>

    </BrowserRouter> 
    
  )
}

export default App
