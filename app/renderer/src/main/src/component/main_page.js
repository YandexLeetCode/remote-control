import React , { useState , useEffect}from 'react'
import layout from '../style/main_page.module.scss'
// 使用antd Component
import { Menu, Button, Avatar } from 'antd'
import { UserOutlined, SwapOutlined,TeamOutlined } from '@ant-design/icons';
import { HashRouter, Link } from 'react-router-dom'
// 自定义组件
import BasicRoute from '../router/router';
/**
 * 主页面 布局 + 样式
 */
export default function MainLayout(props) {

    const [userName, setUserName] = useState("MAP-PC");

    useEffect(() => {
        document.title = "Promise.RemoteControl";
    })
    // 箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this
    // 箭头函数没有自己的this，它会捕获自己在定义时（注意，是定义时，不是调用时）所处的外层执行环境的this，并继承这个this值。所以，箭头函数中this的指向在它被定义的时候就已经确定了，之后永远不会改变。
    // 此语法确保 `toggleCollapsed` 内的 `this` 已被绑定。
    // 注意: 这是 *实验性* 语法。
    // handleWidth = () => {}
    return (
        <div className={layout.container}>
        <div className={layout.header}>免费许可证(仅非商业用途)</div>
        <HashRouter>
            <div className={layout.body}>
                {/* 最左侧功能列表 */}
                <div className={layout.body_left} >
                    <div className={layout.body_left_avatar}>
                        <Link to="/login" ></Link>
                        <div className={layout.body_left_avatar_icon}>
                            <img src="/images/man_2.jpg"/>
                        </div>
                        <div className={layout.body_left_avatar_name}>{userName}</div>
                    </div>
                    <Menu 
                        defaultSelectedKeys={['1']}
                        mode="vertical"
                        theme="light"
                        >
                        <Menu.Item key="1" icon={<SwapOutlined />}>
                            <Link to="/remoteControl" >远程控制</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<TeamOutlined />}>
                            <Link to="/contactUser" >计算机和联系人</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className={layout.body_right}>
                    <div className={layout.body_right_top}>
                        <BasicRoute />
                    </div>
                    <div className={layout.body_right_bottom}>
                        <div className={layout.body_right_bottom_left}></div>
                        <div className={layout.body_right_bottom_right}>连接准备已就绪(安全连接)</div>
                    </div>
                </div>
            </div>
        </HashRouter>
    </div>
    )
}
