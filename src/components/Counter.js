import React from 'react';
import PropTypes from "prop-types";
import './Counter.scss';


const Counter = ({number, color, onIncrement, onDecrement, onSetColor, index}) => {
    return (
        <div className="Counter" onClick={()=>onIncrement(index)}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement();
                }
            }
            onDoubleClick={() => onSetColor(index)}
            style={{backgroundColor:color}}>
                {number}
        </div>
    )

}

Counter.propTypes = {
    number: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onSetColor: PropTypes.func.isRequired,
}

Counter.defaultProps ={
    number: 0,
    color: 'blue',
    onIncrement: () => console.warn("onIncrement not defined"),
    onDecrement: () => console.warn("onDecrement not defined"),
    onSetColor: () => console.warn("onSetColor not defined")
}


export default Counter;