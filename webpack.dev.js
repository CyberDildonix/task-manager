import * as webpack from 'webpack';
import * as path from 'path';

import * as config from './webpack.common';

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': 'dev' }));
config.plugins.push(new webpack.optimize.UglifyJsPlugin());
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

export default config;
