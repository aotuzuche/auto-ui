const fs = require('fs');

// 递归删除目录
function deepRemove(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file) {
      var curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        deepRemove(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

// 递归覆盖目录
function deepCopy(frompath, topath, level = 0) {
  if (level === 0) {
    // 先把目标目录清空
    deepRemove(topath);
    // 创建目标目录
    fs.mkdirSync(topath);
  }
  // 递归的从原始目录拷贝文件到目标目录
  if (fs.existsSync(topath) && fs.existsSync(frompath)) {
    fs.readdirSync(frompath).forEach(function(file) {
      var curPath = frompath + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        fs.mkdirSync(topath + '/' + file);
        deepCopy(curPath, topath + '/' + file, level + 1);
      } else {
        fs.writeFileSync(topath + '/' + file, fs.readFileSync(curPath));
      }
    });
  }
}

module.exports = {
  deepCopy,
  deepRemove,
};
