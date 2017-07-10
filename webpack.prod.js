import * as webpack from 'webpack';
import * as config from './webpack.common';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

config.plugins.push(
    new ExtractTextPlugin({
      filename: '[name].css'
    })
);
config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'prod'
    })
);

module.exports = config;