import React from 'react'
import login from '../style/login.module.css'


/**
 * 主页面 布局 + 样式
 */
class Login extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={login.container}>Login</div>
        )
    }
}
export default Login
