'use strict';

var through = require('through2');
// 用于删除源代码中 .scss文件的引用
module.exports = function(options) {
  function removeScssImport(file, encoding, cb) {
    if (file.isNull() || file.isStream()) {
      return cb(null, file);
    }

    var contents = file.contents.toString();
    contents = contents.replace(/require\(\"\.\/style.scss\"\);|import '\.\/style\.scss';/gi, '');
    file.contents = new Buffer(contents);
    cb(null, file);
  }

  return through.obj(removeScssImport);
};
