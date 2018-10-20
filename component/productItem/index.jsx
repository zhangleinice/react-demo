import React, { Component, Fragment } from 'react';
import styles from './index.less';
import CountDown from '../CountDown/index';
import Progress from '../progress/index';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>
                <div className={styles.box}>
                    <div className={styles.header}>
                        <img src={require('../../../../../assets/bank/Icon/buffet.svg')} width='24px' height="24px" alt=""/>
                        <span className={styles.title}>限时促销</span>
                        <div className={styles.time}>
                            <CountDown endTime="2018-10-15"/>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.pic}><img src={require('../../../../../assets/2.jpg')} alt=""/></div>
                        <div className={styles.info}>
                            <div className={styles.name}>自助餐5折特权卡</div>
                            {
                                [1,2].map((item, idx) => (
                                    <div className={styles.list} key={`list${idx}`}>
                                        <img src={require('../../../../../assets/bank/Icon/buffet.svg')} width='8px' height="8px" alt=""/>
                                        <span>自助餐“单人礼遇” 6 次</span>
                                    </div>
                                ))
                            }
                            <div className={styles.progress}>
                                <Progress total = {2000} current = {1500} />
                            </div>
                            <div className={styles.foot}>
                                <div className={styles.price}>
                                    <span className={styles.symbol}>￥</span>
                                    <span className={styles.num}>1</span>元
                                </div>
                                <div className={styles.amount}>限量2000份</div>
                                <div className={styles.btn}>马上抢</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Fragment>
        );
    }
}

export default ProductItem;