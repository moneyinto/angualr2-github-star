const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const HOST = 'localhost';
const PORT = 4000;

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    devServer: {
        port: PORT,
        host: HOST,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: [path.resolve(__dirname, '../src/styles')]
            }
        ]
    }
});
