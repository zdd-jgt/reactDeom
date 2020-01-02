import React from 'react'
import { Route, Link } from 'react-router-dom'

const User = ({ match }) => <p>{ match.params.id }</p>
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, word</h1>
                <ul>
                    <li>
                        <Link to='/welcome/1'>User 1</Link>
                    </li>
                    <li>
                        <Link to='/welcome/2'>User 2</Link>
                    </li>
                    <li>
                        <Link to='/welcome/3'>User 3</Link>
                    </li>
                </ul>
                <Route path='/welcome/:id' component={User} />
            </div>
        )
    }
}
export default Welcome;