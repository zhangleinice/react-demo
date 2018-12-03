import React from 'react';

const iiHOC = a => WrapComponent => {
    return class extends React.Component{
        render() {
            console.log(a);
            console.log(this.props);
            return <div>iihoc1</div>;
        }
    };
}; 

export default iiHOC;