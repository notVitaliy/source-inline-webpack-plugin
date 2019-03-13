import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin-4.0.0-beta.5'

import { processInlineHtml } from './processInlineHtml'

export const apply: webpack.Plugin['apply'] = compiler => {
  compiler.hooks.compilation.tap('InlineScriptPlugin', compilation => {
    HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync('InlineScriptPlugin', processInlineHtml)
  })
}
