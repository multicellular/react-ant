import React from "react";
import TweenOne from "rc-tween-one";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import "./less/nav.less";

const { Item } = Menu;

class Header3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen
    });
  };

  render() {
    const { isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navs = [
      {
        to: "/",
        children: <p>首页</p>
      },
      {
        to: "/user/info",
        children: <p>用户设置</p>
      },
      {
        to: "/user/assets",
        children: <p>我的资产</p>
      },
      {
        to: "/help",
        children: <p>帮助中心</p>
      },
      {
        to: "/login",
        children: <p>登录</p>
      },
      {
        to: "/register",
        children: <p>注册</p>
      }
    ];
    const navChildren = navs.map(item => {
      return (
        <Item key={item.to} className="header3-item">
          <Link {...item} className={`header3-item-block`} />
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: "from" }}
        className="header3 home-page-wrapper jzih1dpqqrg-editor_css"
        {...props}
      >
        <div className={`home-page${phoneOpen ? " open" : ""}`}>
          <TweenOne
            animation={{ x: -30, type: "from", ease: "easeOutQuad" }}
            className="header3-logo jzjgnya1gmn-editor_css"
          >
            <img
              width="100%"
              src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-J8NSLj9rbsAAAAAAAAAAABkARQnAQ"
              alt="img"
            />
          </TweenOne>
          {isMobile && (
            <div
              className="header3-mobile-menu"
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            className="header3-menu"
            animation={
              isMobile
                ? {
                    x: 0,
                    height: 0,
                    duration: 300,
                    onComplete: e => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = "auto";
                      }
                    },
                    ease: "easeInOutQuad"
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? "inline" : "horizontal"}
              defaultSelectedKeys={["sub0"]}
              theme="light"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header3;
