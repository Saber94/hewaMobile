export default defineAppConfig({
  pages: [
    'pages/business/index',
    'pages/center/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: true,
    color: '#000',
    selectedColor: '#0f0',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/business/index',
        text: '商机',
      },
      {
        pagePath: 'pages/center/index',
        text: '主页',
      },
    ],
  },
  usingComponents: {},
});
