import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: 'white' }}>
            <Link to='/'><h3>Tienda React</h3></Link>
            
            <div className="categories">
                <NavLink 
                    to='/category/libros' 
                    style={({ isActive }) => ({ 
                        margin: '0 10px', 
                        color: isActive ? '#007bff' : 'white', // Se pone azul solo cuando estás ahí
                        textDecoration: 'none',
                        fontWeight: isActive ? 'bold' : 'normal'
                    })}
                >
                    Libros
                </NavLink>
                
                <NavLink 
                    to='/category/juegos' 
                    style={({ isActive }) => ({ 
                        margin: '0 10px', 
                        color: isActive ? '#007bff' : 'white', 
                        textDecoration: 'none',
                        fontWeight: isActive ? 'bold' : 'normal'
                    })}
                >
                    Juegos
                </NavLink>
            </div>

            {}
            <CartWidget /> 
        </nav>
    );
}

export default NavBar;