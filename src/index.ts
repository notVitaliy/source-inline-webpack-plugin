import webpack from 'webpack'
import { apply } from './apply'

export class HtmlInlineSourcePlugin {
  apply(compiler: webpack.Compiler) {
    return apply(compiler)
  }
}
