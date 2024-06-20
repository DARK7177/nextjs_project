// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Add support for MP3 files
      config.module.rules.push({
        test: /\.mp3$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]', // Output path and filename
            },
          },
        ],
      });
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/images/[name].[hash].[ext]', // Output path and filename
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  
  