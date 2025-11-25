import CartWidget from './CartWidget';
import '../Style/Style.css';

function NavBar () {
    return (
        <nav className="navbar navbar navbar-dark bg-primary">
            <h2>Tienda Deportiva</h2>

            <ul className='menu'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>

            <CartWidget/>
        </nav>
    );
}

export default NavBar ;