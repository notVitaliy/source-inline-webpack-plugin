import webpack = require('webpack')

import semver from 'semver'
import { getHtmlWebpackPluginVersion } from './getHtmlWebpackPluginVersion'

const webpackVersion = getHtmlWebpackPluginVersion()
const isHtmlWebpackPlugin3 = semver.lt(webpackVersion, '4.0.0')

const apply = isHtmlWebpackPlugin3 ? require('./apply-3').apply : require('./apply-4').apply

export class HtmlInlineSourcePlugin extends webpack.Plugin {
  apply(compiler: webpack.Compiler) {
    return apply(compiler)
  }
}
