import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/asyncMock'; 
import ItemDetail from '../components/presentation/ItemDetail'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const { itemId } = useParams(); 
    
    useEffect(() => {
        // eslint-disable-next-line
        setLoading(true);
        getProductById(itemId) 
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error("Error al cargar detalle:", error);
                setProduct(null);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [itemId]); 

    return (
        <div style={{ textAlign: 'center', minHeight: '50vh' }}>
            {loading ? (
                <h1 style={{ color: '#28a745' }}>Cargando Detalle...</h1>
            ) : product ? (
                <ItemDetail {...product} /> 
            ) : (
                <h1 style={{ color: 'red' }}>Producto ID {itemId} no encontrado.</h1>
            )}
        </div>
    );
};
export default ItemDetailContainer;