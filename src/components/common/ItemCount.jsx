import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div className='Controls' style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button className="Button" onClick={decrement} style={{ padding: '5px 10px' }}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment} style={{ padding: '5px 10px' }}>+</button>
            </div>
            <div>
                <button 
                    className="Button" 
                    onClick={() => onAdd(quantity)} 
                    disabled={!stock}
                    style={{ 
                        backgroundColor: stock ? '#28a745' : '#ccc', 
                        color: 'white', 
                        padding: '10px 20px', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: stock ? 'pointer' : 'not-allowed'
                    }}
                >
                    {stock ? 'Agregar al carrito' : 'Sin stock'}
                </button>
            </div>
        </div>
    );
};

export default ItemCount;