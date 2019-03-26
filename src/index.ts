import webpack = require('webpack')

import { apply } from './apply'

export class HtmlInlineSourcePlugin extends webpack.Plugin {
  apply(compiler: webpack.Compiler) {
    return apply(compiler)
  }
}
