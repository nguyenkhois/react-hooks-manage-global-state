import React, { Component } from 'react';
import { Hello, Count } from './Home';

class App extends Component {
    render() {
        return (
            <>
                <Hello />
                <Count />
            </>
        );
    }
};

export default App;