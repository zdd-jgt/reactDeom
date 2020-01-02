import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom'
// import router from './router/router'
import WelCome from './demo-practice/practice-module/practice-module'
import sz from './demo-practice/shiZhongFanPaiQi/shiZhongFanPaiQi'
import Notfound from './Notfound'

const routing  = (
    <Router>
        <div>
            <ul >
                <li>
                    <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/welcome'>WelCome</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/sz'>时钟翻牌器</NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/welcome' component={WelCome} />
                <Route path='/sz' component={sz} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
