import withVercelToolbar from '@vercel/toolbar/plugins/next'

const plugins = [
  withVercelToolbar()
]

/** @type {import('next').NextConfig} */
const nextConfig = {
}


const decoratedConfig = plugins.reduce((conf, withPlugin) => withPlugin(conf), nextConfig)



export default decoratedConfig
