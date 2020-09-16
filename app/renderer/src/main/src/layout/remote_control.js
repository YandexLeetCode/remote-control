import React from 'react'
import remote_control from '../style/remote_control.module.css'

/**
 * 主页面 布局 + 样式
 */
class RemoteControl extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={remote_control.container}>RemoteControl</div>
        )
    }
}
export default RemoteControl
