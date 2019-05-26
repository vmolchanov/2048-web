import React, {Component} from 'react';
import Cell from '../Cell';

class Field extends Component {
    constructor(props) {
        super(props);

        this.size = 4;
        this.values = new Array(this.size);
    }

    componentWillMount() {
        for (let i = 0; i < this.size; i++) {
            this.values[i] = new Array(this.size);
            for (let j = 0; j < this.size; j++) {
                this.values[i][j] = 0;
            }
        }
    }

    render() {
        return (
            <div className='Field'>
                {
                    this.values.map((row) =>
                        row.map((value) => <Cell value={value} />)
                    )
                }
            </div>
        );
    }
}

export default Field;
