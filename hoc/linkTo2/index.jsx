import React from 'react';
import styles from './index.less';
import { Link } from 'dva/router';

const LinkTo = info => {
    const {
        imgUrl = `${require('../../assets/bank/tohome.png')}`,
        txt = '返回首页', 
        link = '/b/bank/list'
    } = info;
    return (
        <Link to={link}>
            <div className={styles.box}>
                <img src={imgUrl} width="72" alt=""/>
                <span>{txt}</span>
            </div> 
        </Link>
    )
}

export default LinkTo;
 