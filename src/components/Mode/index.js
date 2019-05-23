import './index.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slider from '../Slider';

class Mode extends Component {
    render() {
        return (
            <div className='Mode'>
                <Slider sliderId='Mode__slider' />

                <ul className='Mode__buttons-list'>
                    <li className='Mode__buttons-item'>
                        <Link
                            to='/game'
                            className='Mode__button Mode__button_color_orange'
                        >    
                            Начать игру
                        </Link>
                    </li>
                    <li className='Mode__buttons-item'>
                        <Link
                            to='/bestscores'
                            className='Mode__button Mode__button_color_brown'
                        >    
                            Рекорды
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Mode;