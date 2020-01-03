import React, { Component } from 'react'
import './FlipClock.css'
class Flipper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            nextCount : 1, 
            isFlipping : false,
            flipType : 'down'
        }
    }
    render() {
        const { count, nextCount, isFlipping, flipType } = this.state
       
        return (
            // {/* 翻牌的外框  */}
            <div className={'flip '+ flipType + ' ' + (isFlipping?'go':'')}>
                {/* 位于前面的纸牌 */}
                <div className={'digital front ' + this._textClass(count)}></div>
                {/* 位于后面的纸牌 */}
                <div className={'digital back ' + this._textClass(nextCount)} ></div>
            </div>
        )
    }
     // 翻牌
     _flip(type,front,back) {
        if(this.state.isFlipping){
            return false
        }
        this.setState( state =>({
            isFlipping: true,
            count: front,
            nextCount: back,
            flipType : type
        }))
        setTimeout(() => {
            this.setState( state =>({
                count: state.nextCount,
                isFlipping: false,
            }))
        }, 600)
    }

    // 向下翻转 + 1
    flipDown(front,back) {
        this._flip('down',front,back)
    }

    // 向上翻转 - 1
    flipUp(front,back) {
        this._flip('up',front,back)
    }

    // 设置前牌文字
    setFront(text) {
        this.setState({
            count:text
        })
    }
    _textClass(number) {
        return 'number' + number
    }
}
export default Flipper;