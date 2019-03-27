import { inlineSource } from 'inline-source'

const handlers = []

if (process.env.NODE_ENV === 'production' && !process.env.INLINE_PROD) {
  const handler = function(source) {
    source.content = ' '
    source.replace = ' '
    return Promise.resolve()
  }

  handlers.push(handler)
}

export const processInlineHtml = async (data, cb) => {
  const prodInlineOpts: Record<string, any> = { attribute: 'inline-prod' }
  if (handlers.length) prodInlineOpts.handlers = handlers

  data.html = await inlineSource(data.html, prodInlineOpts)

  const devInlineOpts = { attribute: 'inline' }
  data.html = await inlineSource(data.html, devInlineOpts)

  return data
}
