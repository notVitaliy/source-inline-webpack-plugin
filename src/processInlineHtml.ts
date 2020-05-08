import { inlineSource } from 'inline-source'

const prodHandlers = []
const stagingHandlers = []

const handler = function (source) {
  source.content = ' '
  source.replace = ' '
  return Promise.resolve()
}

if (process.env.NODE_ENV !== 'production' && !process.env.INLINE_PROD) prodHandlers.push(handler)
if (process.env.NODE_ENV !== 'staging' && !process.env.INLINE_STAGING) stagingHandlers.push(handler)

export const processInlineHtml = async (data) => {
  const prodInlineOpts: Record<string, any> = { attribute: 'inline-prod' }
  if (prodHandlers.length) prodInlineOpts.handlers = prodHandlers
  data.html = await inlineSource(data.html, prodInlineOpts)

  const stagingInlineOpts: Record<string, any> = { attribute: 'inline-staging' }
  if (stagingHandlers.length) stagingInlineOpts.handlers = stagingHandlers
  data.html = await inlineSource(data.html, stagingInlineOpts)

  const devInlineOpts = { attribute: 'inline' }
  data.html = await inlineSource(data.html, devInlineOpts)

  return data
}
