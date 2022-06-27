import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {
    return (
        <div className='cart'>
            <div>
                <img src={props.car.image} alt="" />
            </div>
            <h5>{props.car.name}</h5>
            <button className="deleteBtn" onClick={() => props.removeFromCart(props.car)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default Cart;