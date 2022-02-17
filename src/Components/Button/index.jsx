//importar React
import React from "react";
import PropTypes from 'prop-types'
import './Button.css'
//componente funcional

//cuando el return comienzo de primero en la funcion y no hay nada mas, se puede eliminar
// type=button-long-text
const Button = ({ type, text, clickHandler }) => {//(text)=>{console.log('this is',text)}
    //cuando el cuerpo de la funcion tiene una sola linea, se puede eliminar la llaves
    return (
        <button className={type} onClick={() => clickHandler(text)}>
            <span>
                {text}
            </span>
        </button>
    )
}

Button.propType = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}


export default Button;