
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ItemListConteiner from './components/ItemListConteiner'
import ItemCount from './components/ItemCount';

function App() {
  

  return (
    <>
    <Navbar/>
    <ItemListConteiner greeting= 'Bienvenidos a Xtreme Sport'/>
    <ItemCount stock={15}/>
    </>  
  )
}

export default App
