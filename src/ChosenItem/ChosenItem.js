import React from 'react';
import './ChosenItem.css';

const ChosenItem = (props) => {
    const {name, image} = props.chosenItem;
    console.log(props.chosenItem);
    return (
        <div className="chosenItem">
            <h1>{name}</h1>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default ChosenItem;