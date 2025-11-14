// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    facebookUrl: 'https://www.facebook.com/金星殯儀服務-395066911133842/',
    phone: '9381 0003',
    email: 'info@venusfuneralservice.com',
  },
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg;
  }
};

module.exports = withNx(nextConfig);
