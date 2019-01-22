import React from 'react';
import propTypes from 'prop-types';

const InlineError = ({ text }) => (
    <span style={{ color: "red", marginTop: "5px", display: "block" }}>{text}</span>
);

InlineError.propTypes = {
    text: propTypes.string.isRequired
};

export default InlineError;
