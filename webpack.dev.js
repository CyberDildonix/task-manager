const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.common');

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': 'dev' }));
config.devtool = 'inline-source-map';
config.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9000,
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: true,
};

module.exports = config;
