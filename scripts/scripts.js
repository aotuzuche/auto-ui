const chokidar = require('chokidar')

chokidar
  .watch(['packages/**/*.ts', 'packages/**/*.tsx', '!packages/**/*.d.ts'], {
    ignored: /(^|[\/\\])\../
  })
  .on('all', (event, path) => {
    console.log(event, path)
  })
