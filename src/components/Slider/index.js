import './index.css';
import React, {Component} from 'react';

const slides = [
    {
        src: 'http://placehold.it/100x100?text=3x3',
        alt: '3x3',
        checked: false
    },
    {
        src: 'http://placehold.it/100x100?text=4x4',
        alt: '4x4',
        checked: true
    },
    {
        src: 'http://placehold.it/100x100?text=5x5',
        alt: '5x5',
        checked: false
    },
    {
        src: 'http://placehold.it/100x100?text=6x6',
        alt: '6x6',
        checked: false
    },
    {
        src: 'http://placehold.it/100x100?text=8x8',
        alt: '8x8',
        checked: false
    }
];

const dataitems = [
    {
        text: 'Крошечное (3x3)',
        checked: false
    },
    {
        text: 'Классическое (4x4)',
        checked: true
    },
    {
        text: 'Большое (5x5)',
        checked: false
    },
    {
        text: 'Еще больше (6x6)',
        checked: false
    },
    {
        text: 'Огромное (8x8)',
        checked: false
    }
];

class Slider extends Component {
    constructor(props) {
        super(props);
        this.sliderId = props.sliderId;
        this.number = 1;

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    componentDidMount() {
        this.container = document.querySelector(`.${this.sliderId}`);
    }

    render() {
        const className = `Slider ${this.sliderId}`;

        return (
            <div className={className}>
                <ul className='Slider__slides-list'>
                    {slides.map((slide, index) => {
                        const className = `Slider__slides-item${slide.checked ? ' active' : ''}`
                        return (
                            <li
                                className={className}
                                key={index}
                                data-index={index}
                            >
                                <img
                                    className='Slider__slides-image'
                                    src={slide.src}
                                    alt={slide.alt}
                                />
                            </li>
                        );
                    })}
                </ul>

                <div className='Slider__control' onClick={this.onButtonClick}>
                    <button
                        className='Slider__button Slider__control-prev'
                        type='button'
                    >
                        Предыдущий слайд
                    </button>
                    <ul className="Slider__control-datalist">
                        {dataitems.map((dataitem, index) => {
                            const className = `Slider__control-dataitem${dataitem.checked ? ' active' : ''}`;
                            return (
                                <li
                                    className={className}
                                    key={index}
                                    data-index={index}
                                >
                                    {dataitem.text}
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        className='Slider__button Slider__control-next'
                        type='button'
                    >
                        Следующий слайд
                    </button>
                </div>
            </div>
        );
    }

    inactiveAll() {
        [...this.container.querySelectorAll(`.${this.sliderId} .Slider__slides-item.active`)].forEach((slide) =>
            slide.classList.remove('active')
        );
        [...this.container.querySelectorAll(`.${this.sliderId} .Slider__control-dataitem.active`)].forEach((dataitem) =>
            dataitem.classList.remove('active')
        );
    }

    setSlideWithNumber(number) {
        this.inactiveAll();
        this.container
            .querySelector(`.${this.sliderId} .Slider__slides-item[data-index='${number}']`)
            .classList
            .add('active');
        this.container
            .querySelector(`.${this.sliderId} .Slider__control-dataitem[data-index='${number}']`)
            .classList
            .add('active');
    }

    onButtonClick(e) {
        const target = e.target;
    
        if (!target.classList.contains('Slider__button')) {
            return;
        }
    
        if (target.classList.contains('Slider__control-prev')) {
            this.number = (this.number - 1 < 0) ?
                dataitems.length - 1 :
                this.number - 1;
        }
    
        if (target.classList.contains('Slider__control-next')) {
            this.number = (this.number + 1 >= dataitems.length) ?
                0 :
                this.number + 1;
        }

        this.setSlideWithNumber(this.number);
    }
}

export default Slider;
