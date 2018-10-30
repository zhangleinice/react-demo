import React from 'react';

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
// const withLoading = wrapComponent => {
//     return class extends React.Component{
//         render(){
//             // if(isLoading){
//             //     return <div>加载中</div>
//             // }
//             return (
//                 <wrapComponent {...this.props}/>
//             )
//         }
//     }
// }
const withLoading = WrapComponent => ({isLoading = true, ...otherProps}) => {
    isLoading ?
    <div>正在加载中。。。</div>
    :
    <WrapComponent {...otherProps} />;
};
// const withLoading = loadingProp => wrapComponent => {
//     return class LoadingHOC extends Component {
//         render() {
//             return isEmpty(this.props[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props}/>;
//         }
//     }
    
// };

export default withLoading;