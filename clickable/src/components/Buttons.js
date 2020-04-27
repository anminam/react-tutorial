import React from "react";
import './Buttons.scss';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className="Buttons">
            <button onClick={onCreate}>생성</button> 
            <button onClick={onRemove}>삭제</button> 
        </div>
    )

    
}

export default Buttons;
