import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirm: ''
    })
    const { cart, total, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(buyer.email !== buyer.emailConfirm) {
            alert("Los emails no coinciden")
            return
        }

        const order = {
            buyer: { name: buyer.name, phone: buyer.phone, email: buyer.email },
            items: cart,
            total: total,
            date: new Date()
        }

        console.log("Orden generada:", order)
        
        const id = Math.floor(Math.random() * 100000)
        setOrderId(id)
        clearCart()
    }

    if (orderId) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
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
                <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Generar Orden
                </button>
            </form>
        </div>
    )
}

export default Checkout