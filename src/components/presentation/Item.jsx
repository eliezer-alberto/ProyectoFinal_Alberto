import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img, category }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '15px', width: '250px', display: 'inline-block', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
            <img src={img} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3>{name}</h3>
            <p style={{ color: '#555' }}>Categoría: {category}</p>
            <p style={{ fontWeight: 'bold' }}>Precio: ${price}</p>
            
            {}
            <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                <button style={{ background: '#007bff', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}>
                    Ver Detalle
                </button>
            </Link>
        </div>
    );
};
export default Item;