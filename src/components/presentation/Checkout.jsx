import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../services/firebaseConfig"

const Checkout = () => {
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirm: ''
    })
    const { cart, total, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(buyer.email !== buyer.emailConfirm) {
            alert("Los emails no coinciden")
            return
        }

        setLoading(true)

        const order = {
            buyer: { 
                name: buyer.name, 
                phone: buyer.phone, 
                email: buyer.email 
            },
            items: cart.map(product => ({
                id: product.id,
                title: product.name,
                price: product.price,
                quantity: product.quantity
            })),
            total: total,
            date: serverTimestamp()
        }

        try {
            const ordersRef = collection(db, "orders")
            const response = await addDoc(ordersRef, order)
            
            setOrderId(response.id)
            clearCart()
        } catch (error) {
            console.error("Error al generar la orden:", error)
            alert("Hubo un error al procesar tu compra")
        } finally {
            setLoading(false)
        }
    }

    if (orderId) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1 style={{ color: '#28a745' }}>¡Gracias por tu compra!</h1>
                <p>Tu número de comprobante es:</p>
                <div style={{ 
                    display: 'inline-block', 
                    padding: '15px 25px', 
                    backgroundColor: '#333', 
                    color: '#fff',           
                    borderRadius: '8px',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    marginTop: '10px'
                }}>
                    {orderId}
                </div>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" name="name" placeholder="Nombre completo" onChange={handleInputChange} required style={{ padding: '10px' }} />
                <input type="number" name="phone" placeholder="Teléfono" onChange={handleInputChange} required style={{ padding: '10px' }} />
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required style={{ padding: '10px' }} />
                <input type="email" name="emailConfirm" placeholder="Confirmar Email" onChange={handleInputChange} required style={{ padding: '10px' }} />
                
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ 
                        backgroundColor: loading ? '#ccc' : '#28a745', 
                        color: 'white', 
                        padding: '15px', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: loading ? 'default' : 'pointer' 
                    }}
                >
                    {loading ? "Procesando..." : "Generar Orden"}
                </button>
            </form>
        </div>
    )
}

export default Checkout