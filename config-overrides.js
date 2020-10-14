const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    modules: 'node_modules',
    '@library': 'library/src',
  })(config)

  return config
}