/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, // If you want to use them as icons
            svgProps: { role: 'img', 'aria-label': '' } // Add accessibility attributes
          }
        },
        'url-loader' // To handle SVGs as regular images if needed
      ]
    });

    return config;
  },
};

module.exports = nextConfig;
