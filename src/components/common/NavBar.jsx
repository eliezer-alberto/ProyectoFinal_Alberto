import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ padding: '15px', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {}
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2em' }}>
                Tienda React 🛒
            </Link>
            
            <div style={{ display: 'flex' }}>
                {}
                <Link to="/category/libros" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>
                    Libros
                </Link>
                <Link to="/category/juegos" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>
                    Juegos
                </Link>
                {}
                <span style={{ color: 'white', margin: '0 15px' }}>🛒 0</span>
            </div>
        </nav>
    );
};
export default NavBar;