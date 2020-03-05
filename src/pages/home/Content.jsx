import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button } from "antd";

class Content extends React.PureComponent {
  render() {
    const { isMobile,...tagProps } = this.props;
    return (
      <OverPack
        {...tagProps}
        playScale={0.3}
        className="home-page-wrapper content11-wrapper"
      >
        <QueueAnim
          type="bottom"
          leaveReverse
          key="page"
          delay={[0, 100]}
          className="title-wrapper"
        >
          <img
            alt=""
            className="title-image"
            src="https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg"
          />
          <h1 className="title-h1">丰富的特色展台</h1>
          <div className="title-content">
            特色展台包括 Ant Design 、AntV、AntG、Egg 等明星产品，更有产品专家
          </div>
          <div className="title-content">现场问诊，为你答疑解难</div>
        </QueueAnim>
        <TweenOne
          key="button"
          style={{ textAlign: "center" }}
          animation={{ y: 30, opacity: 0, type: "from", delay: 300 }}
        >
          <Button className="button" href="#">
            立即报名
          </Button>
        </TweenOne>
      </OverPack>
    );
  }
}

export default Content;
