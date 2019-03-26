import webpack, { Plugin } from 'webpack'

import { apply } from './apply'

export class HtmlInlineSourcePlugin extends Plugin {
  apply(compiler: webpack.Compiler) {
    return apply(compiler)
  }
}
