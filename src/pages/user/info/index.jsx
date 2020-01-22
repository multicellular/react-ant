import React from 'react';
import TweenOne from 'rc-tween-one';
import { Descriptions } from 'antd';


class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <TweenOne
                component="header"
                animation={{ opacity: 0, type: 'from' }}
                // {...this.props}
            >
                <div className="user-info-widget">
                    <Descriptions title="User Info">
                        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="Address">
                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Descriptions.Item>
                    </Descriptions>
                </div>
            </TweenOne>
        );
    }
}

export default UserInfo;