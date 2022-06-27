import React, { useEffect, useState } from 'react';
import './Shop.css'
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import ChosenItem from '../ChosenItem/ChosenItem';


const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    const [chosenItem, setChosenItem] = useState([]);

    // load cars data
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    // hide the "chosenItem" component if there is not chosen item.
    useEffect(() => {
        if(cart.length === 0) {
            setChosenItem([])
        }
    }, [cart])

    // add item to the cart and add only unique items
    function addToCart(car) {
        const exists = cart.find(cartCar => cartCar.id === car.id)
        if (!exists) {
            setCart([...cart, car])
        }
    }

    // using filter remove a specific item from the cart
    function removeFromCart(car) {
        let newCart = cart.filter(item => item.id !== car.id);
        setCart(newCart)
    }

    // choose a random item
    function chooseOne() {
        if (cart.length > 0) {
            let randomNumber = Math.floor(Math.random() * cart.length);

            // This "if else" block makes sure that the same item is not chosen twice in a same sequence. 
            if (chosenItem === cart[randomNumber]) {
                if(cart[randomNumber - 1]) {
                    setChosenItem(cart[randomNumber - 1]);
                } else if(cart[randomNumber + 1]) {
                    setChosenItem(cart[randomNumber + 1]);
                }
            }
            else {
                setChosenItem(cart[randomNumber]);
            }

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
                {chooseOne && <ChosenItem chosenItem={chosenItem}></ChosenItem>}
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