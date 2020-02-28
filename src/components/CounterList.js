import React from 'react';
import Counter from '../components/Counter';
import './CounterList.scss';
const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div className="CounterList">
            {
                counters && counters.map(({color, number}, index) => 
                    <Counter key={index} color={color} number={number} onIncrement={onIncrement} onDecrement={onDecrement} onSetColor={onSetColor} index={index}/>
                )
            }
        </div>
    )
}

export default CounterList;

