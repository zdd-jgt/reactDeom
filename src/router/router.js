import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute  } from 'react-router'
import APP from '../App'
import WelCome from '../demo-practice/practice-module/practice-module'
import sz from '../demo-practice/shiZhongFanPaiQi/shiZhongFanPaiQi'
const routeConfig = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/welcom'>WelCome</Link>
                </li>
                <li>
                    <Link to='/sz'>时钟翻牌器</Link>
                </li>
            </ul>
            <Route exact path='/' component={APP} />
            <Route path='/welcome' comonent={WelCome} />
            <Route path='/sz' component={sz} />
        </div>
    </Router>
)
   
export default routeConfig
