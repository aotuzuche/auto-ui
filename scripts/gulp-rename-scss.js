'use strict';

const PluginError = require('plugin-error');
const through = require('through2');
const PLUGIN_NAME = 'gulp-rename-scss';

// 用于删除源代码中 .scss文件的引用
module.exports = function(options) {
  function renameScssRequire(file, encoding, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return cb(null, file);
    }

    var contents = file.contents.toString();
    contents = contents.replace(/\.\/index.scss/gi, './index.css');
    file.contents = new Buffer(contents);
    cb(null, file);
  }

  return through.obj(renameScssRequire);
};
