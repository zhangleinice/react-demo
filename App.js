import React, { Component, Fragment } from 'react';
import ppHOC from './hoc/ppHOC.jsx';
// import Example from './hooks/index.jsx';
import iiHOC from './hoc/iiHoc.jsx';
import withLoading from './hoc/withLoading.jsx';

// @ppHOC
class App extends Component {
    render() {
        // const { value, onChange } = this.props.name;
        return (
            <Fragment>
                {/* ppHOC */}
                {/* <div>
                    <input name="zl" value={value} onChange={onChange} />
                    <br/>
                    <input name="rocky" x='x' {...this.props.name} />
                </div> */}
                {/* iiHOC */}
                {/* <div>1</div> */}
                <div>loading</div>
            </Fragment>
        );
    }
}

// export default ppHOC(App);
// export default iiHOC(App);
export default withLoading(App);
// export default App;