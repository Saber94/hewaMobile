import { Component } from 'react';
import Taro from '@tarojs/taro';
import { CoverView, CoverImage } from '@tarojs/components';
import store from '~/store/index';
import { setActiveIndex } from '~/reducers/tabbarReducer';
import home from '../images/tabbar/home.png';
import homeS from '../images/tabbar/home_selected.png';
import center from '../images/tabbar/center.png';
import centerS from '../images/tabbar/center_selected.png';

import './index.less';

export default class Index extends Component {
  state = {
    color: '#ABB0C1',
    selectedColor: '#272E36',
    list: [
      {
        pagePath: '/pages/business/index',
        selectedIconPath: homeS,
        iconPath: home,
        text: '首页',
      },
      {
        pagePath: '/pages/center/index',
        selectedIconPath: centerS,
        iconPath: center,
        text: '我的',
      },
    ],
  };

  switchTab(index, url) {
    this.setSelected(index);
    Taro.switchTab({ url });
  }

  setSelected(idx: number) {
    store.dispatch(setActiveIndex(idx));
  }

  render() {
    const { list, color, selectedColor } = this.state;
    const { activeIndex } = store.getState().tabbar;

    return (
      <CoverView className="tab-bar">
        <CoverView className="tab-bar-border"></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView
              key={index}
              className="tab-bar-item"
              onClick={this.switchTab.bind(this, index, item.pagePath)}
            >
              <CoverImage
                src={
                  activeIndex === index ? item.selectedIconPath : item.iconPath
                }
              />
              <CoverView
                style={{ color: activeIndex === index ? selectedColor : color }}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })}
      </CoverView>
    );
  }
}
