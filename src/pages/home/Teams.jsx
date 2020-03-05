import React from "react";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
// import { getChildrenToRender } from "@utils";
import "rc-banner-anim/assets/index.css";

class Teams extends React.PureComponent {
  // getChildrenToRender = children => {
  //   return children.map((item, i) => {
  //     const { titleWrapper, ...elementPros } = item;
  //     return (

  //     );
  //   });
  // };

  render() {
    const { isMobile, ...tagProps } = this.props;
    // const { dataSource, isMobile } = tagProps;
    // delete tagProps.dataSource;
    // delete tagProps.isMobile;
    return (
      <div {...tagProps} className="home-page-wrapper teams0-wrapper">
        <OverPack playScale="0.3" className="home-page teams0">
          <TweenOne
            key="wrapper"
            animation={
              isMobile
                ? {
                    scaleY: "+=0.3",
                    opacity: 0,
                    type: "from",
                    ease: "easeOutQuad"
                  }
                : {
                    y: "+=30",
                    opacity: 0,
                    type: "from",
                    ease: "easeOutQuad"
                  }
            }
            resetStyle
            component=""
          >
            <BannerAnim
              type="across"
              arrow={false}
              dragPlay={!!isMobile}
              className="banner-anim"
            >
              <Element
                className="teams0-banner-user-elem"
                prefixCls={"teams0-banner-user-elem"}
              >
                <QueueAnim
                  type={["bottom", "top"]}
                  delay={200}
                  key="text"
                  className="teams0-content-wrapper"
                >
                  <img
                    alt=""
                    className="teams0-image"
                    src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ"
                  />
                  <div className="teams0-content">
                    SEE = Seeking Experience &
                    Engineering，意为探索用户体验与工程实践，由蚂蚁金服集团每年举办
                    1-2 次，包括专业分享、产品展台、Workshop 等内容。
                  </div>
                  <h1 className="teams0-h1">TEST</h1>
                  <div className="teams0-content">公司+职位 信息暂缺</div>
                </QueueAnim>
              </Element>
              <Element
                className="teams0-banner-user-elem"
                prefixCls={"teams0-banner-user-elem"}
              >
                <QueueAnim
                  type={["bottom", "top"]}
                  delay={200}
                  key="text"
                  className="teams0-content-wrapper"
                >
                  <img
                    alt=""
                    className="teams0-image"
                    src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ"
                  />
                  <div className="teams0-content">
                    SEE = Seeking Experience &
                    Engineering，意为探索用户体验与工程实践，由蚂蚁金服集团每年举办
                    1-2 次，包括专业分享、产品展台、Workshop 等内容。
                  </div>
                  <h1 className="teams0-h1">TEST</h1>
                  <div className="teams0-content">公司+职位 信息暂缺</div>
                </QueueAnim>
              </Element>
            </BannerAnim>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Teams;
