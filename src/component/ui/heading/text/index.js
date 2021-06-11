import PropTypes from 'prop-types';
import React from 'react';

const styles = {
    heading :{
        color: "black",
        fontSize: "12px",
    }
};

const Text = ({text}) =>{
    return(
        <p style={styles.heading}>{text}</p>
    );
};
export default Text;

Text.prototype = {
    text : PropTypes.string.isRequired
};