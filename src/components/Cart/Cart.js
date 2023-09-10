import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Items en el Carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='cart-container'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <div className='cart-content'>
                <h3>Total: ${total}</h3>
                <button onClick={() => clearCart()} className='Button'>Limpiar Mesa</button>
                <Link to='/checkout' className='Option'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart