module.exports = function(api) {
  const { BABEL_MODULE, NODE_ENV } = process.env
  const isDev = NODE_ENV === 'development'

  let useESModules = false

  useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'development' && NODE_ENV !== 'production'

  api && api.cache(false)
  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: useESModules ? false : 'commonjs'
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: isDev,
          useESModules
        }
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-object-assign',
      '@babel/plugin-proposal-class-properties'
    ]
  }
}
