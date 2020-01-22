/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

// import Nav3 from '../Layout/Nav';
import Banner from './Banner';
import Content from './Content';
import Pricing from './Pricing';
import Teams from './Teams';
import Content2 from './Content2';
// import Footer1 from '../Layout/Footer';

import {
  // Nav30DataSource,
  Banner50DataSource,
  Content110DataSource,
  Pricing10DataSource,
  Teams00DataSource,
  Content120DataSource,
  // Footer11DataSource,
} from '@utils/data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

// const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      // show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    // /* 如果不是 dva 2.0 请删除 start */
    // if (location.port) {
    //   // 样式 build 时间在 200-300ms 之间;
    //   setTimeout(() => {
    //     this.setState({
    //       show: true,
    //     });
    //   }, 500);
    // }
    // /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      // <Nav3
      //   id="Nav3_0"
      //   key="Nav3_0"
      //   dataSource={Nav30DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Banner
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content
        id="Content11_0"
        key="Content11_0"
        dataSource={Content110DataSource}
        isMobile={this.state.isMobile}
      />,
      <Pricing
        id="Pricing1_0"
        key="Pricing1_0"
        dataSource={Pricing10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content2
        id="Content12_0"
        key="Content12_0"
        dataSource={Content120DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Footer1
      //   id="Footer1_1"
      //   key="Footer1_1"
      //   dataSource={Footer11DataSource}
      //   isMobile={this.state.isMobile}
      // />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {/* {this.state.show && children} */}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
        {children}
      </div>
    );
  }
}
