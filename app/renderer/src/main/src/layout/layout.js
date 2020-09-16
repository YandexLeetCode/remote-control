import React from 'react'
import '../style/layout.css'

/**
 * 主页面 布局 + 样式
 */
class MainLayout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { body_left_width : 70};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleWidth = this.handleWidth.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWidth);
        console.log('unmount')
    }
    // 箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this
    // 箭头函数没有自己的this，它会捕获自己在定义时（注意，是定义时，不是调用时）所处的外层执行环境的this，并继承这个this值。所以，箭头函数中this的指向在它被定义的时候就已经确定了，之后永远不会改变。
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    // 注意: 这是 *实验性* 语法。
    // handleWidth = () => {
    handleWidth() {
        const screenWidth = document.documentElement.clientWidth;
        let width = `${screenWidth}`;
        if (width > 1000) {
            this.resizeWidth(250);
        } else {
            this.resizeWidth(70);
        }
    }

    resizeWidth(widthNumber) {
        this.setState({
            body_left_width: widthNumber
        });
    }
    
    render() {
        return (
            <div class="container">
            <div class="header">1</div>
            <div class="body">
                <div class="body_left" style={{width:this.state.body_left_width + 'px'}}>left</div>
                <div class="body_right">
                    <div class="body_right_top">
                        <div class="body_right_top_left">body_right_top_left</div>
                        <div class="body_right_top_right">body_right_top_right</div>
                    </div>
                    <div class="body_right_bottom">body_right_bottom</div>
                </div>
            </div>
        </div>
        )
    }
}
export  {
    MainLayout
}