const products = [
    { id: '1', name: 'Libro de React', price: 1500, category: 'libros', img: 'https://picsum.photos/200?random=1', stock: 10, description: 'Libro sobre Hooks y estado.' },
    { id: '2', name: 'Juego de Aventuras', price: 2500, category: 'juegos', img: 'https://picsum.photos/200?random=2', stock: 5, description: 'Un juego de mundo abierto muy divertido.' },
    { id: '3', name: 'Libro de Algoritmos', price: 1800, category: 'libros', img: 'https://picsum.photos/200?random=3', stock: 7, description: 'Guía de complejidad O(n).' },
    { id: '4', name: 'Control Inalámbrico', price: 800, category: 'juegos', img: 'https://picsum.photos/200?random=4', stock: 12, description: 'Control compatible con todas las plataformas.' },
    { id: '5', name: 'Guía de CSS', price: 900, category: 'libros', img: 'https://picsum.photos/200?random=5', stock: 20, description: 'Dominando Flexbox y Grid.' }
];

// Retraso simulado de 1 segundo
const delay = 1000; 

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, delay);
    });
};

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Encuentra el producto o devuelve undefined
            resolve(products.find(prod => prod.id === itemId));
        }, delay);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, delay);
    });
};