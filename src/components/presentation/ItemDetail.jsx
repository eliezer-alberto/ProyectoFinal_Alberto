import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../common/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        
        const item = { id, name, price, img };
        addItem(item, quantity); 
        
        console.log(`Agregaste ${quantity} de ${name} al carrito`);
    };

    return (
        <article className="CardItem" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto' }}>
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
                <small>ID: {id}</small>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" style={{ width: '100%', borderRadius: '10px' }} />
            </picture>
            <section>
                <p className="Info">Categoría: {category}</p>
                <p className="Info">Descripción: {description}</p>
                <p className="Info" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Precio: ${price}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className='ItemFooter' style={{ marginTop: '20px' }}>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px' }}>
                            Terminar compra
                        </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    );
};

export default ItemDetail;