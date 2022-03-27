import React from 'react';
import './Car.css';
import img from '../images/car-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Car = (props) => {
    const { name, image, year, mpg, price } = props.car;
    return (
        <div className='car'>
            <div className='carImage'>
                <img src={image} alt="" />
            </div>
            <div className='carInfo'>
                <h3>{name}</h3>
                <h5>${price}</h5>
                <h5>MPG {mpg}</h5>
            </div>
            <div className="addToCartBtn">
                <button onClick={() => props.addToCart(props.car)}>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
    );
};

export default Car;