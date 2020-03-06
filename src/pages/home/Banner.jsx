import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

class Banner extends React.PureComponent {
  render() {
    const { isMobile,...tagProps } = this.props;
    return (
      <div {...tagProps} className= 'banner0'>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          className='banner0-text-wrapper'
        >
          <div key="title" className= 'banner0-title'>
          <img src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" width="100%" alt="img" />
          </div>
          <div key="content" className= 'banner0-content'>
          一个高效的页面动画解决方案
          </div>
          <Button ghost key="button" className= 'banner0-button'>
          Learn More
          </Button>
        </QueueAnim>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
