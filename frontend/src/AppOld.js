// import logo from './logo.svg';
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
import { useEffect, useState } from 'react';

function App() {
    const [dogData, setDogData] = useState([]);

    useEffect(() => {
        async function getAPIData() {
            const res = await axios.get('/v1/dogs');
            setDogData(res.data);
            // return res;
        }
        getAPIData();
        // getAPIData().then((res) => console.log('check API: ', res.data));
        // getAPIData().then((res) => setDogData(res.data));
        // getAPIData().catch((err) => console.log(err));
    }, []);

    return (
        
    );
}

export default App;
