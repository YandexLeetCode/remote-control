import React, { useState } from 'react'
import { Checkbox, Input, AutoComplete, Radio, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import remote_control from '../style/remote_control.module.scss'

const plainOptions = ['随系统一同启动RemoteControl', '授权访问'];
const defaultCheckedList = [];

/**
 * 主页面 布局 + 样式
 */
export default function RemoteControl(props) {
    const options = [
        {
            label: renderTitle('Libraries'),
            options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
        }
      ];
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    function renderTitle (title) {
        return (
          <span>
            {title}
            <a
              style={{ float: 'right' }}
              href="https://www.google.com/search?q=antd"
              target="_blank"
              rel="noopener noreferrer"
            >
              more
            </a>
          </span>
        );
      };
    function renderItem (title, count) {
        return {
            value: title,
            label: (
                <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
            )
        }
    }

    const [ checkedList, setCheckedList ] = useState(defaultCheckedList);
    const [ value, setValue ] = useState(1);

    function onChange (checkedList) {
        setCheckedList(checkedList)
    } 

    function radioOnChange (e) {
        setValue(e.target.value);
    }

    return (
        <div className={remote_control.container}>
            <div className={remote_control.left}>
                <div className={remote_control.left_top}>
                    <div>允许远程控制</div>
                    <div>
                        <div>您的ID</div>
                        <div>xxxxxx</div>
                    </div>
                    <div>
                        <div>密码</div>
                        <div>xxxxxx</div>
                    </div>
                </div>
                <div className={remote_control.left_bottom}>
                    <div>无人值守访问</div>
                    <div>
                        <Checkbox.Group 
                            options={plainOptions}
                            value={checkedList}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
            <div className={remote_control.right}>
                <div>远程控制计算机</div>
                <div>
                    <div>伙伴ID</div>
                    <AutoComplete
                        style={{ width: 250 }}
                        options={options}
                        >
                        <Input.Search size="large" placeholder="input here" />
                    </AutoComplete>
                    <div>
                    <Radio.Group onChange={radioOnChange} value={value}>
                        <Radio style={radioStyle} value={1}>
                        远程控制
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                        文件传送
                        </Radio>
                    </Radio.Group>
                    </div>
                    <div>
                    <Button type="primary">连接</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}