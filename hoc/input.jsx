import React, { Component } from 'react';

const ppHOC = WrapComponent => {
    return class extends Component {
        constructor(props){
            super(props);
            this.state = {
                name: ''
            };
            this.onChangeName = this.onChangeName.bind(this);
        }
        onChangeName(event){
            this.setState({
                name: event.target.value
            });
        }
        render() {
            console.log(this.props);
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onChangeName
                }
            };
            return (
                <WrapComponent {...this.props} {...newProps}/>
            );
        }
    };
};

export default ppHOC;