const webpack = require('webpack');
const config = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config.plugins.push(
    new ExtractTextPlugin({
      filename: '[name].css'
    })
);
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
);
config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'prod'
    })
);

module.exports = config;