import React from 'react';

const Feature = (props) => {
    const { description, value } = props.feature;
    return (
        <div>
            <li>{description}: {value}</li>
        </div>
    );
};

export default Feature;