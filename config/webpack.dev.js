const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const HOST = 'localhost';
const PORT = 4000;

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        port: PORT,
        host: HOST,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
});
