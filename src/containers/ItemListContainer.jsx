import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/presentation/ItemList'; 
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { categoryId } = useParams(); 
    
    useEffect(() => {
        // eslint-disable-next-line
        setLoading(true);

        const collectionRef = categoryId 
            ? query(collection(db, 'items'), where('category', '==', categoryId))
            : collection(db, 'items');

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error("Error al cargar productos desde Firebase:", error);
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