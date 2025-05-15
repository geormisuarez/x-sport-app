import '../css/Navbar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='nav-menu'>
            <NavLink className='nav-link' to='/'>
                <img src="../logo1.png" alt="logo" className='logo' />
            </NavLink>
            <NavLink className='nav-link' to="/category/skate">Skate</NavLink>
            <NavLink className='nav-link' to="/category/patines">Patines</NavLink>
            <NavLink className='nav-link' to="/category/bmx">Bicicletas</NavLink>
            <NavLink className='nav-link' to="/category/proteccion">Proteccion</NavLink>
            <CartWidget/>
        </nav>

    )


}

export default Navbar