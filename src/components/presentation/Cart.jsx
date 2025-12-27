import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>No hay items en el carrito</h1>
                <Link to='/' style={{ 
                    display: 'inline-block', 
                    marginTop: '20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    padding: '10px 20px', 
                    textDecoration: 'none', 
                    borderRadius: '5px' 
                }}>
                    Volver al inicio
                </Link>
            </div>
        )
    }

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
            <h1>Tu Carrito</h1>
            <hr />
            { cart.map(p => (
                <div key={p.id} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderBottom: '1px solid #ccc', 
                    padding: '15px 0' 
                }}>
                    <div style={{ flex: 2 }}>
                        <h3 style={{ margin: 0 }}>{p.name}</h3>
                        <small>Precio unitario: ${p.price}</small>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <p style={{ margin: 0 }}>Cant: {p.quantity}</p>
                    </div>
                    <div style={{ flex: 1, textAlign: 'right' }}>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>Subtotal: ${p.price * p.quantity}</p>
                    </div>
                    {/* Botón para eliminar un solo producto */}
                    <button 
                        onClick={() => removeItem(p.id)} 
                        style={{ 
                            marginLeft: '20px', 
                            backgroundColor: '#ff4d4d', 
                            color: 'white', 
                            border: 'none', 
                            padding: '5px 10px', 
                            borderRadius: '3px', 
                            cursor: 'pointer' 
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            )) }
            
            <div style={{ marginTop: '30px', textAlign: 'right' }}>
                <h2 style={{ marginBottom: '20px' }}>Total de la compra: ${total}</h2>
                
                <button 
                    onClick={() => clearCart()} 
                    style={{ 
                        backgroundColor: '#6c757d', 
                        color: 'white', 
                        marginRight: '15px', 
                        padding: '12px 20px', 
                        cursor: 'pointer', 
                        border: 'none', 
                        borderRadius: '5px' 
                    }}
                >
                    Vaciar Carrito
                </button>
                
                <Link 
                    to='/checkout' 
                    style={{ 
                        backgroundColor: '#28a745', 
                        color: 'white', 
                        padding: '12px 25px', 
                        textDecoration: 'none', 
                        borderRadius: '5px',
                        fontWeight: 'bold'
                    }}
                >
                    Finalizar Compra
                </Link>
            </div>
        </div>
    )
}

export default Cart