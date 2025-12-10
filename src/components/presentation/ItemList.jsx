import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {}
                {products.map(prod => (
                    <Item key={prod.id} {...prod} /> 
                ))}
            </div>
        </div>
    );
};
export default ItemList;