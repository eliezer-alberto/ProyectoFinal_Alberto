import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import ItemDetail from "../components/presentation/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        // eslint-disable-next-line
        setLoading(true);

        const docRef = doc(db, 'items', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch(error => {
                console.error("Error al obtener el producto:", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [itemId]);

    return (
        <div className='ItemDetailContainer' style={{ padding: '20px' }}>
            {loading ? (
                <h1 style={{ textAlign: 'center', color: '#007bff' }}>Cargando producto...</h1>
            ) : product ? (
                <ItemDetail {...product} />
            ) : (
                <h1 style={{ textAlign: 'center' }}>El producto no existe</h1>
            )}
        </div>
    );
};

export default ItemDetailContainer;