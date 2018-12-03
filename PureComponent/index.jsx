import { Component } from 'react';

class PureComponent extends Component {
    // 默认true，重渲染
    shouldComponentUpdate(nextProps, nextState) {
        const { props, state } = this;
        // 浅比较
        const shallowCompare = (a, b) => {
            return !(a === b || Object.keys(a).every(k => a[k] === b[k]));
        };
        return shallowCompare(nextProps, props) && shallowCompare(nextState, state); 
    }
}

export default PureComponent;