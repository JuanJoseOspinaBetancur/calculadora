import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button";

const sig = ['+', '-', '*', '/']

const MathOperation = ({ onClickOperation, onClickEqual }) => (
    <section className="math-operations">
        {sig.map(si => <Button key={si.toString()} text={si.toString()} clickHandler={onClickOperation} />)}
        <Button text="=" clickHandler={onClickEqual} />

    </section>
)

MathOperation.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}


export default MathOperation;