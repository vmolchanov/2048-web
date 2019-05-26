import './index.css';
import React from 'react';

function Score(props) {
    const {title, value} = props;

    return (
        <div className='Score'>
            <span className='Score__label'>{title}</span>
            <span className='Score__value'>{value}</span>
        </div>
    );
}

export default Score;
