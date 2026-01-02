import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Checkout from './components/presentation/Checkout';
import Cart from './components/presentation/Cart';

const NotFound = () => <h1 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>404 - Página no encontrada</h1>;

const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    {}
                    <Route path='/cart' element={<Cart />} /> 
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    );
};

export default App;