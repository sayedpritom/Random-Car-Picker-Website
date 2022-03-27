import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {
    console.log(props.car);
    return (
        <div className='cart'>
            <div>
                <img src={props.car.image} alt="" />
            </div>
            <h5>{props.car.name}</h5>
            <FontAwesomeIcon icon={faTrash} />
        </div>
    );
};

export default Cart;