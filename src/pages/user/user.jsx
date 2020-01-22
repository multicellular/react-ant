import React from 'react';
import TweenOne from 'rc-tween-one';
import { PageHeader } from 'antd';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subTitle: '',
        };
        console.log(props.match);
    }
    render() {
        return (
            <TweenOne
                component="header"
                animation={{ opacity: 0, type: 'from' }}
                {...this.props}
            >
                <div className="user-page">
                    <PageHeader
                        style={{
                            border: '1px solid rgb(235, 237, 240)',
                        }}
                        onBack={() => null}
                        title="我的"
                        subTitle={this.state.subTitle}
                    />
                    {this.props.children}
                </div>
            </TweenOne>
        );
    }
}

export default User;