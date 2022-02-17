import React from "react";
import Button from "./Button";
import PropType from 'prop-types'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]



const Numbers = ({ inClickNumber }) => (
    <section className="numbers">
        {numbers.map((number) => <Button key={number} text={number.toString()} clickHandler={inClickNumber} />)}
    </section>

)

Numbers.propType = {
    inClickNumber: PropType.func.isRequired
}

export default Numbers;