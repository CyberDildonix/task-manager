const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            'scss-root': './src/assets/scss/'
        },
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.tsx?$/,
                exclude: __dirname + 'node_modules',
                use: ['awesome-typescript-loader'],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HTMLWebpackPlugin({
            title: 'Task Manager',
            template: './src/app-shell/app-shell.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            async: true
        })
    ],
};

module.exports = config;