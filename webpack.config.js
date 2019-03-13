const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});
module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        stats: 'errors-only',
        open: true,
        port: 4040,
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin,
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify("development")
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/',
                        }
                    }]
            },
            {
                test: /\.(scss|css)$/,
                use: extractPlugin.extract({
                    use: ["css-loader", "sass-loader"],
                    fallback: 'style-loader'
                })
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'react-svg-loader',
                    options: {
                        svgo: {
                            plugins: [{ removeTitle: false }],
                            floatPrecision: 2
                        }
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            '@component': path.resolve(__dirname, 'src/components'),
        }
    }
}
