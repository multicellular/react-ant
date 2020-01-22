import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { getChildrenToRender } from '@utils';

import './less/nav.less'

const { Item, SubMenu } = Menu;

const dataSource = {
  wrapper: { className: 'header3 home-page-wrapper jzih1dpqqrg-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo jzjgnya1gmn-editor_css',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-J8NSLj9rbsAAAAAAAAAAABkARQnAQ',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                <>
                  <p>首页</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '/user/info',
          children: [
            {
              children: (
                <>
                  <p>用户设置</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '/user/assets',
          children: [
            {
              children: (
                <>
                  <p>我的资产</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
        // subItem: [
        //   {
        //     className: 'item-sub',
        //     children: {
        //       className: 'item-sub-item jzj8295azrs-editor_css',
        //       children: [
        //         {
        //           name: 'image0',
        //           className: 'item-image jzj81c9wabh-editor_css',
        //           children:
        //             'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*4_S6ToPfj-QAAAAAAAAAAABkARQnAQ',
        //         },
        //       ],
        //     },
        //     name: 'sub~jzj8hceysgj',
        //   },
        // ],
      },
      {
        name: 'item4',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <>
                  <p>帮助中心</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item5',
        className: 'header3-item',
        children: {
          href: '/login',
          children: [
            {
              children: (
                <>
                  <p>登录</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item6',
        className: 'header3-item',
        children: {
          href: '/register',
          children: [
            {
              children: (
                <>
                  <p>注册</p>
                </>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};

class Header3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header3-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header3-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                  <div {...childItem}>
                    {childItem.children.map(getChildrenToRender)}
                  </div>
                );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header3-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
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
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                  x: 0,
                  height: 0,
                  duration: 300,
                  onComplete: (e) => {
                    if (this.state.phoneOpen) {
                      e.target.style.height = 'auto';
                    }
                  },
                  ease: 'easeInOutQuad',
                }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub0']}
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
