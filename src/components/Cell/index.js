import './index.css';
import React from 'react';

function Cell(props) {
    const {value} = props;
    const className = `Cell Cell--${value}`

    return (
        <div className={className}>
            {value}
        </div>
    );
}

export default Cell;
