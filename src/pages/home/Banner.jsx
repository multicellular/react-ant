import React from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button } from "antd";
import { connect } from "react-redux";

class Banner extends React.PureComponent {
  render() {
    const animType = {
      queue: "bottom",
      one: {
        y: "+=30",
        opacity: 0,
        type: "from",
        ease: "easeOutQuad"
      }
    };
    return (
      <div className="home-page-wrapper banner5">
        <div className="home-page banner5-page">
          <QueueAnim
            key="text"
            type={animType.queue}
            leaveReverse
            ease={["easeOutQuad", "easeInQuad"]}
            className="banner5-title-wrapper"
            children={[
              { name: "title", children: "产品名", className: "banner5-title" },
              {
                name: "explain",
                className: "banner5-explain",
                children: "产品标语介绍"
              }
            ]}
            componentProps={{
              md: null,
              xs: null
            }}
          >
            <h1 className="banner5-title">产品名</h1>
            <div className="banner5-explain">产品标语介绍</div>
            <div className="banner5-content">
              产品的详细说明，如是什么东西之类的文字
            </div>
            <div className="banner5-button-wrapper">
              <Button className="banner5-button" type="primary">
                开始使用
              </Button>
            </div>
          </QueueAnim>
          <TweenOne
            animation={animType.one}
            key="title"
            className="banner5-image"
          >
            <img
              src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ"
              width="100%"
              alt="img"
            />
          </TweenOne>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    userInfo: state.global.userInfo
  }),
  null
)(Banner);
