'use strict'

const { main, libraryName } = require('../package.json')
const filename = main.replace(/.+?\//, '')

module.exports = {
  filename,
  library: libraryName
}
