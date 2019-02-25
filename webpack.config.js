const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: './style.css'
});
module.exports = {
    entry: ['babel-polyfill', './index.js'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/assets'),
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
                    use: ["css-loader", "sass-loader", "postcss-loader"],
                    fallback: 'style-loader'
                })
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
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
