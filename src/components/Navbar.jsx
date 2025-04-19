import '../css/Navbar.css'
import CartWidget from './CartWidget'


const Navbar = () => {
    return(
        <nav className='nav-menu'>
            <a className='nav-link' href="">
                <img src="../logo1.png" alt="logo" className='logo' />
            </a>
            <a className='nav-link' href="">Skate</a>
            <a className='nav-link' href="">Patines</a>
            <a className='nav-link' href="">Bicicletas</a>
            <a className='nav-link' href="">Proteccion</a>
            <CartWidget/>
        </nav>

    )


}

export default Navbar