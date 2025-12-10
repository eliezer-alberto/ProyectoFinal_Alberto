import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../data/asyncMock'; 
import ItemList from '../components/presentation/ItemList'; 

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { categoryId } = useParams(); 
    
    useEffect(() => {
        // eslint-disable-next-line
        setLoading(true);

        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error("Error al cargar productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [categoryId]);

    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '20px 0'}}>
                {categoryId ? `Catálogo de ${categoryId.toUpperCase()}` : 'CATÁLOGO COMPLETO'}
            </h1>
            {loading ? (
                <h1 style={{ textAlign: 'center', color: '#007bff' }}>Cargando Catálogo...</h1>
            ) : (
                <ItemList products={products} /> 
            )}
        </div>
    );
};
export default ItemListContainer;