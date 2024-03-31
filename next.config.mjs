
const plugins = [
]

/** @type {import('next').NextConfig} */
const nextConfig = {
}


const decoratedConfig = plugins.reduce((conf, withPlugin) => withPlugin(conf), nextConfig)



export default decoratedConfig
