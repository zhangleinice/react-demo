import React, { Component } from 'react';
import Input from './hoc/input.jsx';

// @Input
class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <input  {...this.props.name} />
            </div>
        );
    }
}

export default Input(App);