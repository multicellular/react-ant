import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import "./less/footer.less";

class Footer extends React.Component {
  static defaultProps = {
    className: "footer1"
  };
  render() {
    const { ...props } = this.props;
    return (
      <div {...props} className="home-page-wrapper footer1-wrapper">
        <OverPack className="footer1" playScale={0.2}>
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            className="home-page"
            gutter={0}
          >
            <Col className="block" xs={24} md={6}>
              <h2>
                <img
                  alt=""
                  className="logo"
                  src="https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg"
                />
              </h2>
              <div className="slogan">
                <div>Animation specification and components of Ant Design.</div>
              </div>
            </Col>
            <Col className="block" xs={24} md={6}>
              <h2>产品</h2>
              <div>
                <Link>产品更新记录</Link>
                <Link>API文档</Link>
                <Link>快速入门</Link>
              </div>
            </Col>
            <Col className="block" xs={24} md={6}>
              <h2>关于</h2>
              <div>
                <Link>FAQ</Link>
                <Link>联系我们</Link>
              </div>
            </Col>
            <Col className="block" xs={24} md={6}>
              <h2>资源</h2>
              <div>
                <Link>Ant Design</Link>
              </div>
            </Col>
          </QueueAnim>
          <TweenOne
            animation={{ y: "+=30", opacity: 0, type: "from" }}
            key="copyright"
            className="copyright-wrapper"
          >
            <div className="home-page">
              <div className="copyright">
                <span>
                  ©2018 by <a href="https://motion.ant.design">Ant Motion</a>{" "}
                  All Rights Reserved
                </span>
              </div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
