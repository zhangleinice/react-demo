import React from 'react';

const iiHOC = WrapComponent => {
    return class extends WrapComponent{
        render() {
            console.log(this.props);
            return <div>iihoc1</div>;
            // return super.render();
        }
    };
}; 

export default iiHOC;