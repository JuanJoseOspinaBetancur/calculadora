//importamos
/*eslint no-eval:0*/
import React, { useState } from 'react';
import words from 'lodash.words'
import Result from './Components/Result';
import MathOperation from './Components/MathOperations';
import Functions from './Components/Functions';
import Numbers from './Components/Numbers';
import './App.css'
//generacion de la funcion de componente
//los parentesis son para parametros
const App = () => {
    
    //array destructuring
    //para usar useState
    //const useState = React.useState;
    //const arrayTextFuncionModificaText = useState("")
    //arrayTextFuncionModificaText=>["",funcion]

    //1era posicion: valor (que inicialmente es el valor por defecto)
    //const texto = arrayTextFuncionModificaText[0]

    //2da posicion: funcion que me va a permitir modificar el valor por defecto
    //const funcionModificaText = arrayTextFuncionModificaText[1]

    const [stack, setStack] = useState("")
    //cuerpo de la funcion, lo que ejecuta la funcion

    const items = words(stack, /[^-^+^*^/]+/g)
    /*Es similar a un if 
    es una consulta, que si es tru, pasa a lo primero si no, pasa a lo segundo
    (pregunta) ? (si es verdadeor) : (si es falso)*/
    const value = items.length > 0 ? items[items.length - 1] : "0";

    return (<main className='react-calculator'>

        <Result value={value} />

        <Numbers inClickNumber={number => { setStack(`${stack}${number}`) }} />

        <Functions
            onClickClear={() => { if (stack.length > 0) { setStack("") } }}

            onClickR={() => {
                if (stack.length > 0) {
                    const newStack = stack.substring(0, stack.length - 1); setStack(newStack)
                }
            }}
        />
        <MathOperation
            onClickOperation={operation => { setStack(`${stack}${operation}`) }}
            onClickEqual={equal => { setStack(eval(stack).toString()) }}
        />
    </main>)
}
// exportacion
export default App;
