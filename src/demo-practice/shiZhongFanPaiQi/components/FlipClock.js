/*
 * 翻牌时钟
 * 来至： 兔子先生
 * 地址：https://link.zhihu.com/?target=https%3A//github.com/Yuezi32/flipClock
 * @createDate: 2019-12-31
*/
import React, { Component } from 'react'
import './FlipClock.css'
import Flipper from './Flipper'

class FlipClock extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.flipObjs = [];
        this.time = null;
        this.flipDown = this.flipDown.bind(this);
        this.flipUp = this.flipUp.bind(this);
    }
    // 向下翻转 + 1
    flipDown () {
        if(this.state.isFlipping){
            return false
        }
        this.setState( state =>({
            isFlipping: true,
            nextCount: state.count >= 9 ? 0 : (state.count + 1),
            flipType : 'down'
        }))
        setTimeout(() => {
            this.setState( state =>({
                count: state.nextCount,
                isFlipping: false,
            }))
        }, 1000)
    }
    // 向上翻转 - 1
    flipUp () {
        if(this.state.isFlipping){
            return false
        }
        this.setState( state =>({
            isFlipping: true,
            nextCount: state.count <= 0 ? 9 : (state.count - 1),
            flipType : 'up'
        }))
        setTimeout(() => {
            this.setState( state =>({
                count: state.nextCount,
                isFlipping: false,
            }))
        }, 1000)
    }
    render() {
        return (
            <div className='FlipClock'>
                <Flipper ref='flipperHour1' ></Flipper>
                <Flipper ref='flipperHour2' ></Flipper>
                <em>:</em>
                <Flipper ref='flipperMinute1' ></Flipper>
                <Flipper ref='flipperMinute2' ></Flipper>
                <em>:</em>
                <Flipper ref='flipperSecond1' ></Flipper>
                <Flipper ref='flipperSecond2'></Flipper>
            </div>
        )
    }
    componentDidMount() {
        this.flipObjs = [
            this.refs.flipperHour1,
            this.refs.flipperHour2,
            this.refs.flipperMinute1,
            this.refs.flipperMinute2,
            this.refs.flipperSecond1,
            this.refs.flipperSecond2
        ]
        this.init()
        this.run()
    }
    componentWillUnmount() {
        clearInterval(this.time);
    }
    // 初始化数字
    init() {
        let now = new Date();
        let nowTimeStr = this.formatDate(now,'hhiiss');
        for(let i=0; i < this.flipObjs.length; i++) {
            this.flipObjs[i].setFront(nowTimeStr[i])
        }
    }

    run() {
        this.time = setInterval(() => {
            let now = new Date();
            let nowTimeStr = this.formatDate(new Date(now.getTime() - 1000), 'hhiiss');
            let nextTimeStr = this.formatDate(now, 'hhiiss');
            for(let i=0; i < this.flipObjs.length; i++) {
                if (nowTimeStr[i] === nextTimeStr[i]) {
                    continue
                }
                this.flipObjs[i].flipDown(
                    nowTimeStr[i],
                    nextTimeStr[i]
                )
            }
        },1000)
    }

    // 正则格式化日期
    formatDate(date, dateFormat) {
        /* 单独格式化年份，根据y的字符数量输出年份
       * 例如：yyyy => 2019
              yy => 19
              y => 9
       */
        if (/(y+)/.test(dateFormat)) {
            dateFormat = dateFormat.replace(
                RegExp.$1,
                (date.getFullYear() + '').substr(4 - RegExp.$1.length)
            )
        }
        // 格式化月、日、时、分、秒
        let o = {
            'm+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'i+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(dateFormat)) {
                // 取出对应的值
                let str = o[k] + ''
                /* 根据设置的格式，输出对应的字符
                 * 例如: 早上8时，hh => 08，h => 8
                 * 但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方
                 * 例如: 下午15时，hh => 15, h => 15
                 */
                dateFormat = dateFormat.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? str : this.padLeftZero(str)
                )
            }
        }
        return dateFormat
    }
    // 日期时间补零
    padLeftZero(str) {
        return ('00' + str).substr(str.length)
    }
}
/*
 *flip: 纸牌的外框
 *down：表示向下翻牌动效，还有对于的up
 *front: 表示位于前面的纸牌
 *back: 表示位于后面的纸牌
 *number*: 表示纸牌上的数字

*/ 
export default FlipClock