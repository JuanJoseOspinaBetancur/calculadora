import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const Functions = ({ onClickClear, onClickR }) => (
    <section className="functions">
        <Button type='button-long-text' text='Clear' clickHandler={onClickClear} />
        <Button type='arrow' text='&larr;' clickHandler={onClickR} />
    </section>
)

Functions.propType = {
    onClickClear: PropTypes.func.isRequired,
    onClickR: PropTypes.func.isRequired
}

export default Functions;