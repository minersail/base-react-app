import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Basic from './components/Basic';

interface AppProps {
    stuff: string[],
    deleteThing: (thingIndex: number) => void;
}

class App extends Component<AppProps> {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {
                        this.props.stuff.map((thing, i) => {
                            return <Basic info={thing} key={i} index={i} deleteFunc={this.props.deleteThing} />
                        })
                    }
                </header>
            </div>
        );
    }
}

export default App;
