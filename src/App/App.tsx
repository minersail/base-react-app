import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Basic from './components/Basic';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './utils/types';
import { deleteThing } from './actions/actions';

function App() {
    const dispatch: Dispatch = useDispatch();
    const stuff: string[] = useSelector((state: State) => state.stuff);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {
                    stuff.map((thing, i) => {
                        return <Basic info={thing} key={i} index={i} deleteFunc={ () => { dispatch(deleteThing(i)) }} />
                    })
                }
            </header>
        </div>
    );
}

export default App;
