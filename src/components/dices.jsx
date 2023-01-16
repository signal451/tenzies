import React from "react";

function Dices(props) {
    return (
        <div className={props.isSelected === true ? "selected-die-face" : "die-face"} onClick={props.func}>
            <h2> {props.num} </h2>
        </div>
    );
}

export default Dices;