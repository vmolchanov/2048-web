import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Mode from './components/Mode';
import Game from './components/Game';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App__content">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Mode} />
                            <Route exact path="/game" component={Game} />
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;