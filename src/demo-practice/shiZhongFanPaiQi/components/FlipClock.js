/*
 * 翻牌时钟
 * 来至： 兔子先生
 * 地址：https://link.zhihu.com/?target=https%3A//github.com/Yuezi32/flipClock
 * @createDate: 2019-12-31
*/
import React, { Component } from 'react'
import './FilpClock.css'

class FlipClock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            nextCount : 1, 
            isFlipping : false,
            flipType : 'down'
        };
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
        const { count, nextCount, isFlipping, flipType } = this.state
        return (
            <div className='FlipClock'>
                {/* 翻牌的外框  */}
                <div className={'flip '+ flipType + ' ' + (isFlipping?'go':'')}>
                    {/* 位于前面的纸牌 */}
                    <div className={'digital front ' + this._textClass(count)}></div>
                    {/* 位于后面的纸牌 */}
                    <div className={'digital back ' + this._textClass(nextCount)} ></div>
                </div>
                <div>
                    <button id='btn1' onClick={this.flipDown}>向下翻 + 1</button>
                    <button id='btn2' onClick={this.flipUp}>向上翻 - 1</button>
                </div>
            </div>
        )
    }
    _textClass(number) {
        return 'number' + number
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