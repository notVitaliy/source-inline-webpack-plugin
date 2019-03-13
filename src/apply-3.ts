import webpack from 'webpack'

import { processInlineHtml } from './processInlineHtml'

export const apply: webpack.Plugin['apply'] = compiler => {
  compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-before-html-processing', processInlineHtml)
  })
}
