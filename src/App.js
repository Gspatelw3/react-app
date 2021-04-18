import React, { Component } from 'react';
import './App.scss';
import Wrapper from './components/wrapper/Wrapper';
import AOS from 'aos';

class App extends Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        return (
            <div className="App">
                <Wrapper />
            </div>
        );
    }
}
export default App;
