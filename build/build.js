/**
 * Compile components
 */
const fs = require('fs-extra')
const path = require('path')
const babel = require('@babel/core')
const sass = require('node-sass')

const esDir = path.join(__dirname, '../es')
const libDir = path.join(__dirname, '../lib')
const srcDir = path.join(__dirname, '../packages')
const compilerOption = {
  babel: {
    configFile: path.join(__dirname, '../babel.config.js')
  }
}

const whiteList = /(\.md)$/

// clear dir
fs.emptyDirSync(esDir)
fs.emptyDirSync(libDir)

// copy packages
fs.copySync(srcDir, esDir)

compile(esDir)

function compile(dir, jsOnly = false) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const absolutePath = path.join(dir, file)

    // reomve unnecessary files
    if (whiteList.test(file)) {
      fs.removeSync(absolutePath)
      // scan dir
    } else if (isDir(absolutePath)) {
      return compile(absolutePath)
      // compile sfc
    } else if (/\.js[x]?$/.test(file)) {
      const { code } = babel.transformFileSync(
        absolutePath,
        compilerOption.babel
      )
      const outputJsPath = absolutePath.replace('.jsx', '.js')
      fs.outputFileSync(outputJsPath, code)
    } else if (/\.scss$/.test(file)) {
      const result = sass.renderSync({
        file: absolutePath
      })
      const outputCssPath = absolutePath.replace('.scss', '.css')
      fs.outputFileSync(outputCssPath, result.css)
    }
  })
}

process.env.BABEL_MODULE = 'commonjs'

fs.copySync(srcDir, libDir)
compile(libDir)

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory()
}
