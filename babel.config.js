module.exports = function(api) {
  const { BABEL_MODULE, NODE_ENV } = process.env
  const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test'

  api && api.cache(false)
  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: 'commonjs'
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: false
        }
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-object-assign',
      '@babel/plugin-proposal-class-properties'
    ]
  }
}
