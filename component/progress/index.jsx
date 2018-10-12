/*
 * 进度条
 * @Author: rocky 
 * @since: 2018-10-12 10:25:59 
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

const Progress = ({current, total}) => {
    return (
        <div className={styles.total}>
            <div className={styles.curr} style={{width: (current/total)*108}}>即将售馨</div>
        </div>
    )
}
export default Progress;

Progress.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
}
 
 