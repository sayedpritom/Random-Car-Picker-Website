import React, { useEffect, useState } from 'react';
import './Shop.css'
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import ChosenItem from '../ChosenItem/ChosenItem';


const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    const [chosenItem, setChosenItem] = useState([]);

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    function addToCart(car) {
        setCart([...cart, car])
    }

    function removeFromCart(car) {
        let newCart = cart.filter(item => item.id !== car.id);
        setCart(newCart)
    }

    function chooseOne() {
        if (cart.length > 0) {
            const randomNumber = Math.round(Math.random() * cart.length);

            setChosenItem(cart[randomNumber]);
            console.log(chosenItem, randomNumber);
        }
    }
    return (
        <div className="shop">
            <div className="car-container">
                {
                    cars?.map(car => <Car key={car.id} car={car} addToCart={addToCart}></Car>)
                }
            </div>
            <div className="cart-container">
                <h3>SELECTED AUTOMOBILE</h3>
                <hr />
                {chosenItem && <ChosenItem chosenItem={chosenItem}></ChosenItem> }
                {
                    cart.map(car => <Cart car={car} removeFromCart={removeFromCart} key={car.id}></Cart>)
                }
                <hr />
                <button className='chooseBtn' onClick={() => chooseOne()}>Choose one for me</button> <br />
                <button className='chooseBtn' onClick={() => {
                    setCart([]);
                    setChosenItem([])
                }}>Choose again</button>
            </div>
        </div>
    );
};

export default Shop;