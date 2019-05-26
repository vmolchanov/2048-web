import React, {Component} from 'react';
import Field from '../Field';
import Score from '../Score';

class Game extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Game'>
                <header className='Game__header'>
                    <div className='Game__logo'>

                    </div>

                    <ul className='Game__scores-list'>
                        <li className='Game__scores-item'>
                            <Score
                                title={'Score'}
                                value={0}
                            />
                        </li>
                        <li className='Game__scores-item'>
                            <Score
                                title={'High score'}
                                value={0} // временно
                            />
                        </li>
                    </ul>
                </header>
                <ul className='Game__buttons-list'>
                    <li className='Game__buttons-item'>
                        <button>Назад</button>
                    </li>
                    <li className='Game__buttons-item'>
                        <button>Новая игра</button>
                    </li>
                </ul>
                <Field />
            </div>
        );
    }
}

export default Game;
