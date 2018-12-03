import React, { Fragment } from 'react';
import styles from './index.less';
import { Link } from 'dva/router';

const linkTo = date => WarpComponent => {
    return class extends React.Component{
        render(){
            const {
                    imgUrl = `${require('../../assets/bank/tohome.png')}`,
                    txt = '返回首页', 
                    link = '/b/bank/list'
                } = date;
            return (
                <Fragment>
                    <WarpComponent {...this.props}/>
                    <Link to={link}>
                        <div className={styles.box}>
                            <img src={imgUrl} width="72" alt=""/>
                            <span>{txt}</span>
                        </div> 
                    </Link>
                </Fragment>
            )
        }
    }
}

export default linkTo;
 