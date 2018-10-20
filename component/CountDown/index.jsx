/*
 * 倒计时
 * @Author: rocky 
 * @since: 2018-10-12 09:37:26 
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            timer: null
        };
    }
    componentDidMount() {
        const { endTime } = this.props;
        let time = Date.parse(endTime) - new Date();
        const second = ('00' + Math.floor((time/1000)%60)).slice(-2);
        const minute = ('00' + Math.floor((time/1000/60)%60)).slice(-2);
        const hour = ('00' + Math.floor((time/1000/60/60)%24)).slice(-2);
        const day = ('00' + Math.floor((time/1000/60/60/24))).slice(-2);
        this.setState({
            second, minute, hour, day
        })
        this.timer(time)
    }
    componentWillUnmount() {
        clearInterval(this.state.timer)
    }
    timer = time => {
        this.setState({
            timer: setInterval(() => {
                    time = time - 1000;
                    const second = ('00' + Math.floor((time/1000)%60)).slice(-2);
                    const minute = ('00' + Math.floor((time/1000/60)%60)).slice(-2);
                    const hour = ('00' + Math.floor((time/1000/60/60)%24)).slice(-2);
                    const day = ('00' + Math.floor((time/1000/60/60/24))).slice(-2);
                    this.setState({
                        second, minute, hour, day
                    })
                }, 1000)
        })
    }
    render() {
        const { day, hour, minute, second } = this.state;
        return (
            <div className={styles.box}>剩余
                <span>{day}</span>天
                <span>{hour}</span>时
                <span>{minute}</span>分
                <span>{second}</span>秒
            </div>
        );
    }
}

CountDown.propTypes = {
    endTime: PropTypes.string.isRequired
};