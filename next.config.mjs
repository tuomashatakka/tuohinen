
import { default as stylus } from '@zeit/next-stylus'

const plugins = [
]

/** @type {import('next').NextConfig} */
const nextConfig = {
}


const decoratedConfig = plugins.reduce((conf, withPlugin) => withPlugin(conf), nextConfig)



export default decoratedConfig
