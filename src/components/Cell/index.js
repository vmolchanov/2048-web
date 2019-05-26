import React from 'react';

function Cell(props) {
    const {value} = props;
    return (
        <div className='Cell'>
            <span className='Cell__value'>{value}</span>
        </div>
    );
}

export default Cell;
