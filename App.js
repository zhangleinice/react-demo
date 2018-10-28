import React, { Component, Fragment } from 'react';
import ppHOC from './hoc/input.jsx';
// import Example from './hooks/index.jsx';
import iiHOC from './hoc/iiHoc.jsx';

// @ppHOC
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
        this.handChange = this.handChange.bind(this);
    }
    handChange(event){
        this.setState({
            value: event.target.value
        });
    }
    render() {
        console.log(this.props);
        const { value, onChange } = this.props.name;
        return (
            <Fragment>
                {/* ppHOC */}
                {/* <div>
                    <input name="zl" value={value} onChange={onChange} />
                    <br/>
                    <input name="rocky" x='x' {...this.props.name} />
                </div> */}
                {/* iiHOC */}
                <div>1</div>
            </Fragment>
        );
    }
}

// export default ppHOC(App);
export default iiHOC(App);