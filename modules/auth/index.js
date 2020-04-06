const { resolve, join } = require('path')
const { readdirSync } = require('fs')
const libRoot = resolve(__dirname, '')
export default function(moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.auth
  }

  const { namespace } = options

  copyCore.call(this, options)

  function copyCore(options) {
    const coreRoot = resolve(libRoot, 'core')
    for (const file of readdirSync(coreRoot)) {
      this.addTemplate({
        src: resolve(coreRoot, file),
        fileName: join('auth', `core/${file}`)
      })
    }
  }

  // add debug plugin
  this.addPlugin({
    src: resolve(__dirname, 'debug.js'),
    fileName: join(namespace, 'debug.js'),
    options: {
      ...options,
      somethingElse: false
    }
  })
  this.addPlugin({
    src: resolve(__dirname, 'plugins/auth.js'),
    fileName: join(namespace, 'plugins/auth.js'),
    options
  })
}

module.exports.meta = require('./package')
