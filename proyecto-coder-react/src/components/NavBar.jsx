import {Link} from 'react-router-dom'
import CartWidget from './CartWidget';
import '../Style/Style.css';

function NavBar () {
    return (
    <>
        <nav className="navbar navbar navbar-dark bg-primary">

            <Link to="/">
            
                <h3 className='title'>Tienda Deportiva</h3> 
            </Link>

            <button>
                <Link to= "/category/indumentaria">Indumentaria </Link>
            </button>

            <button>
                <Link to= "/category/suplementos">Suplementos </Link>
            </button>

            <button>
                <Link to= "/contacto">Contacto</Link>
            </button>
            <CartWidget/>
        </nav>
    </>
    );
}

export default NavBar ;