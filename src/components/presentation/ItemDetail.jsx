import React from 'react';

const ItemDetail = ({ name, price, description, img, stock }) => {
    return (
        <div style={{ border: '1px solid #ccc', margin: '40px auto', padding: '30px', maxWidth: '700px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#333' }}>{name}</h2>
            <img src={img} alt={name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', margin: '15px 0' }} />
            <p><strong>Precio:</strong> ${price}</p>
            <p><strong>Descripción:</strong> {description}</p>
            <p style={{ color: stock > 0 ? 'green' : 'red' }}>Stock disponible: {stock}</p>
            
            <div style={{ marginTop: '20px' }}>
                <button style={{ background: '#28a745', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};
export default ItemDetail;