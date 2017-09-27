const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "main.css",
    disable: false,
    allChunks: true
})

module.exports = merge(common, {
    devServer: {

    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, '../src/styles')]
                        }
                    }],
                    // 在开发环境使用 style-loader
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass,

        new UglifyJsPlugin({
            sourceMap: false
        })
    ]
});
