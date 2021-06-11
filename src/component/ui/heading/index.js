import PropTypes from 'prop-types';
import React from 'react';

const styles = {
    heading :{
        color: "blue",
        fontSize: "24px",
    }
};

const Heading = ({text}) =>{
    return(
        <h2 style={styles.heading}>{text}</h2>
    );
};
export default Heading;

Heading.prototype = {
    text : PropTypes.string.isRequired
};