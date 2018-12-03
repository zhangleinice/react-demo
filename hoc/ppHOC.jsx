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
            // 添加新的props向下传给WrapComponent，不破坏从上层接收的props
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onChangeName
                }
            };
            return (
                <div>
                    <div>124</div>
                    {/* <WrapComponent {...newProps} {...this.props}/> */}
                </div>
            );
        }
    };
};

export default ppHOC;