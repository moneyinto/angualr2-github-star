const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'main': './src/main.ts'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new ContextReplacementPlugin(
            /(.+)?angular(\\|\/)core(.+)?/,
            '',
            {}
        ),

        new CopyWebpackPlugin([
            { from: './src/assets', to: 'assets' }
        ])
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.resolve('node_modules')],
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader'
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    }
};
