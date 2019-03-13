import path from 'path'
import fs from 'fs'

const ROOT = process.cwd()

export const getHtmlWebpackPluginVersion = () => {
  const files = fs.readdirSync(path.resolve(ROOT))
  const pkg = files.find(file => file.includes('package.json'))
  const json = fs.readFileSync(pkg, 'UTF-8')
  const contents = JSON.parse(json)

  const dependencies = {
    ...(contents.dependencies || {}),
    ...(contents.devDependencies || {}),
    ...(contents.peerDependencies || {}),
  }

  return dependencies.webpack || false
}
