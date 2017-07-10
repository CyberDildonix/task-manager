import * as webpack from 'webpack';
import * as path from 'path';

import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';

const config = {
    entry: './src/app.tsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.tsx?$/,
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
        }),
    ]
};

module.exports = config;