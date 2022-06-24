import React from 'react';
import './CartStyle.scss';
// react context
import CartContext from '../Contexts/CartContext';

class Cart extends React.Component {
    static contextType = CartContext;

    render() {
        const { cart, setCart } = this.context;

        return (
            <section className="cart-container">
                <div className="cart-header">CHECKOUT:</div>
                <div className="cart-row">
                    {cart &&
                        cart.length > 0 &&
                        cart.map((item, index) => {
                            return (
                                <div key={item.id} className="cart-items">
                                    <div className="cart-img">
                                        <img src={item.imageUrl} alt={item.name} />
                                    </div>
                                    <div className="cart-info">
                                        <span>{item.name}</span>
                                        <span>{item.breed}</span>
                                    </div>
                                    <div className="cart-desc">{item.description}</div>
                                    <div className="cart-price">{item.price}</div>
                                </div>
                            );
                        })}
                </div>
            </section>
        );
    }
}

export default Cart;
