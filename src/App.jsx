/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import { Nav, Footer } from '@pages/layouts';
import Routes from '@configs/router.config'

import { Footer11DataSource } from '@utils/data.source';
// import { BaseApi } from '@apis'

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

// BaseApi.powers();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <div className="App">
        <Nav
          id="Nav3_0"
          key="Nav3_0"
          isMobile={this.state.isMobile}
        />
        <div className="main">
          <Routes />
        </div>
        <Footer
          id="Footer1_1"
          key="Footer1_1"
          dataSource={Footer11DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
}