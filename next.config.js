const isVercel = process.env.VERCEL || false
const isGithub = process.env.GITHUB_ACTIONS || false

let assetPrefix = null
if (isVercel) assetPrefix = `https://${process.env.VERCEL_URL}/`
else if (isGithub) assetPrefix = `https://${process.env.GITHUB_URL}/`

module.exports = {
  assetPrefix: assetPrefix,
  // images: {
  //   loader: 'custom',
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //   nextImageExportOptimizer: {
  //     imageFolderPath: 'public/img',
  //     exportFolderPath: 'out',
  //     quality: 90,
  //   },
  // },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
  },
  async rewrites() {
    return []
  },
  async redirects() {
    return []
  },
}
