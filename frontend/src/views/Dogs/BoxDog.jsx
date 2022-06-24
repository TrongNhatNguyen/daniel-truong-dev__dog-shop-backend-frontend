import React from 'react';
// react context
import CartContext from '../Contexts/CartContext';

class BoxDog extends React.Component {
    static contextType = CartContext;

    state = {
        isAdded: false,
        dog: this.props.dog,
    };
    // ------------------------------------------

    handleClickAddToCart = () => {
        // cập nhật dl CartContext
        const { cart, setCart } = this.context;
        setCart(this.state.dog);

        this.setState({
            isAdded: true,
        });
    };
    // ------------------------------------------

    render() {
        let { isAdded } = this.state;
        let { name, breed, price, description, imageUrl } = this.state.dog;

        return (
            <>
                <div className="box-dog-container">
                    <div className="dog-info">
                        <p>{name}</p>
                        <p>{breed}</p>
                    </div>
                    <div className="dog-img-container">
                        <img src={imageUrl} alt={name} className="dog-img" />
                    </div>
                    <div className="dog-desc">{description}</div>
                    <div className="dog-price">{price} $</div>

                    {isAdded ? (
                        <button type="button" className="dog-btn-disabled">
                            ADDED
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="dog-btn"
                            onClick={() => this.handleClickAddToCart()}
                        >
                            ADD TO CART
                        </button>
                    )}
                </div>
            </>
        );
    }
}

export default BoxDog;
