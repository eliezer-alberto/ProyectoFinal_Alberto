import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: 'white' }}>
            <Link to='/'><h3>Tienda React</h3></Link>
            
            <div className="categories">
                <NavLink to='/category/libros' style={{ margin: '0 10px' }}>Libros</NavLink>
                <NavLink to='/category/juegos' style={{ margin: '0 10px' }}>Juegos</NavLink>
            </div>

            {}
            <CartWidget /> 
        </nav>
    );
}

export default NavBar;