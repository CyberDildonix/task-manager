import * as webpack from 'webpack';
import * as path from 'path';

const config:webpack.Configuration = {
  entry: 'src/app.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};

export default config;
