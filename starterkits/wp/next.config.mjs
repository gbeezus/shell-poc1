import { withFaust } from '@faustwp/core';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import { readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const basePath = '';

const imgRemotePatterns = [];

if (process.env.WORDPRESS_IMAGE_HOSTNAME) {
  imgRemotePatterns.push({
    hostname: process.env.WORDPRESS_IMAGE_HOSTNAME,
  });
}

if (process.env.WORDPRESS_INTERNAL_IMAGE_HOSTNAME) {
	imgRemotePatterns.push({
		hostname: process.env.WORDPRESS_INTERNAL_IMAGE_HOSTNAME,
	});
}

// Workaround for Next CSS bug: https://github.com/vercel/next.js/issues/51030#issuecomment-1953834550
// May be able to be removed when 14.2 is released:
// https://github.com/vercel/next.js/releases/tag/v14.2.0-canary.28
const __dirname = dirname(fileURLToPath(import.meta.url));
const [layerDefinition] = String(readFileSync(__dirname + '/source/00-config/index.css')).split('\n');
if (!layerDefinition.startsWith('@layer')) {
  throw new Error('@layer must be first line in source/00-config/index.css');
}


/** @type {import('next').NextConfig} */
export default withFaust({
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://web/wp-content/uploads/:path*',
      }
    ];
  },
  reactStrictMode: true,
  basePath,
  eslint: {
    dirs: ['app', 'source'],
  },
  images: {
    remotePatterns: imgRemotePatterns,
  },
  /**
   * Custom Webpack Config
   * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
   */
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: `/* Inserted in next.config.mjs: */\n${layerDefinition}\n\n`,
        raw: true,
        entryOnly: true,
        include: /\.css$/,
      })
    );

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_BASEPATH': JSON.stringify(basePath || ''),
      }),
    );

    config.plugins.push(
      new StylelintWebpackPlugin({
        exclude: ['node_modules', 'storybook'],
      }),
    );

    return config;
  },
});
