const fs = require('fs');
const componentList = require('./componentList');
const fo = require('./file');
const config = require('./argv');
const styleDir = config.styleDir;

componentList.push('Modal');
componentList.push('SafeArea');

componentList.forEach(component => {
  const name = fo.toLowerLine(component);
  const path = `components/${name}/style/index.scss`;

  if (fs.existsSync(path)) {
    const file = fs.readFileSync(path, 'utf-8');
    fs.writeFileSync(`${styleDir}/${name}/style/index.scss`, file.toString());
  }

  // timepicker有个iscroll.js需要拷贝过去
  // if (name === 'timepicker') {
  //   const file = fs.readFileSync(`components/${name}/iscroll.js`, 'utf-8');
  //   fs.writeFileSync(`libs/${name}/iscroll.js`, file.toString());
  // }
  // 日历组件有3张图片需要拷贝
  if (name === 'at-calendar') {
    fs.copyFileSync('components/at-calendar/date-part.png', `${styleDir}/at-calendar/date-part.png`);
    fs.copyFileSync('components/at-calendar/icon-date-part.png', `${styleDir}/at-calendar/icon-date-part.png`);
    fs.copyFileSync('components/at-calendar/icon-range.png', `${styleDir}/at-calendar/icon-range.png`);
    fs.copyFileSync('components/at-calendar/active-border.png', `${styleDir}/at-calendar/active-border.png`);
  }
  if (name === 'at-nav') {
    fs.copyFileSync('components/at-nav/icon-collection.png', `${styleDir}/at-nav/icon-collection.png`);
    fs.copyFileSync('components/at-nav/icon-home.png', `${styleDir}/at-nav/icon-home.png`);
    fs.copyFileSync('components/at-nav/icon-order.png', `${styleDir}/at-nav/icon-order.png`);
    fs.copyFileSync('components/at-nav/icon-user.png', `${styleDir}/at-nav/icon-user.png`);
    fs.copyFileSync('components/at-nav/icon-collection-active.png', `${styleDir}/at-nav/icon-collection-active.png`);
    fs.copyFileSync('components/at-nav/icon-home-active.png', `${styleDir}/at-nav/icon-home-active.png`);
    fs.copyFileSync('components/at-nav/icon-order-active.png', `${styleDir}/at-nav/icon-order-active.png`);
    fs.copyFileSync('components/at-nav/icon-user-active.png', `${styleDir}/at-nav/icon-user-active.png`);
  }
});

const theme = 'components/theme.scss';
if (fs.existsSync(theme)) {
  const file = fs.readFileSync(theme, 'utf-8');
  fs.writeFileSync(`${styleDir}/theme.scss`, file.toString());
}
