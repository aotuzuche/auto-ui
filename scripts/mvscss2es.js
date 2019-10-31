const fs = require('fs');
const componentList = require('./componentList');
const fo = require('./file');

componentList.push('Modal');
componentList.push('SafeArea');

componentList.forEach(component => {
  const name = fo.toLowerLine(component);
  const path = `components/${name}/style.scss`;

  if (fs.existsSync(path)) {
    const file = fs.readFileSync(path, 'utf-8');
    fs.writeFileSync(`es/${name}/style.scss`, file.toString());
  }

  // timepicker有个iscroll.js需要拷贝过去
  // if (name === 'timepicker') {
  //   const file = fs.readFileSync(`components/${name}/iscroll.js`, 'utf-8');
  //   fs.writeFileSync(`es/${name}/iscroll.js`, file.toString());
  // }
  // 日历组件有3张图片需要拷贝
  if (name === 'at-calendar') {
    fs.copyFileSync('components/at-calendar/date-part.png', 'es/at-calendar/date-part.png');
    fs.copyFileSync('components/at-calendar/icon-date-part.png', 'es/at-calendar/icon-date-part.png');
    fs.copyFileSync('components/at-calendar/icon-range.png', 'es/at-calendar/icon-range.png');
  }
  if (name === 'at-nav') {
    fs.copyFileSync('components/at-nav/icon-collection.png', 'es/at-nav/icon-collection.png');
    fs.copyFileSync('components/at-nav/icon-home.png', 'es/at-nav/icon-home.png');
    fs.copyFileSync('components/at-nav/icon-order.png', 'es/at-nav/icon-order.png');
    fs.copyFileSync('components/at-nav/icon-user.png', 'es/at-nav/icon-user.png');
    fs.copyFileSync('components/at-nav/icon-collection-active.png', 'es/at-nav/icon-collection-active.png');
    fs.copyFileSync('components/at-nav/icon-home-active.png', 'es/at-nav/icon-home-active.png');
    fs.copyFileSync('components/at-nav/icon-order-active.png', 'es/at-nav/icon-order-active.png');
    fs.copyFileSync('components/at-nav/icon-user-active.png', 'es/at-nav/icon-user-active.png');
  }
});

const theme = 'components/theme.scss';
if (fs.existsSync(theme)) {
  const file = fs.readFileSync(theme, 'utf-8');
  fs.writeFileSync(`es/theme.scss`, file.toString());
}
