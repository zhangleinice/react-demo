import React, { Component } from 'react';

const Input = (WrapComponent) => {
    return class Input extends Component {
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
            const newProps = {
                name: {
                    value: this.state.name,
                    onChangeName: this.onChangeName
                }
            }
            return (
                <WrapComponent {...this.props} {...newProps}/>
            );
        }
    };
};

export default Input;