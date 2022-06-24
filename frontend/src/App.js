import React from 'react';
import './App.scss';
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// My CPN
import HomeIndex from './views/Home/HomeIndex';
import ListDog from './views/Dogs/ListDog';
import Cart from './views/Cart/Cart';
import Navigate from './views/Navigate/Navigate';
// axios
import axios from 'axios';
// react context
import CartContext from './views/Contexts/CartContext';

class App extends React.Component {
    // hàm bị nạp vào state phải nằm trên cùng
    setCart = (cart) => {
        this.setState((prevState) => ({
            dogCart: {
                ...prevState.dogCart,
                cart: [...this.state.dogCart.cart, cart],
            },
        }));
    };

    state = {
        dogData: [],
        dogCart: {
            cart: [],
            setCart: this.setCart,
        },
    };

    // ------------------------------------------
    async componentDidMount() {
        let res = await axios.get('/v1/dogs'); // đường link API tạo ở backend (file: index.js)
        console.log('>>> call API AppCPN: ', res.data);

        this.setState({
            dogData: res && res.data ? res.data : [],
        });
    }
    // ------------------------------------------

    render() {
        return (
            <CartContext.Provider value={this.state.dogCart}>
                <BrowserRouter>
                    <div className="App">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <Navigate />
                        <div className="page-container">
                            <Routes>
                                <Route path="/" element={<HomeIndex />} />
                                <Route
                                    path="/list-dog"
                                    element={<ListDog dogData={this.state.dogData} />}
                                />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </CartContext.Provider>
        );
    }
}

export default App;
