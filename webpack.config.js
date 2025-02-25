const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        script: './JS/common.js',
        styles: './CSS/common.js'
    },
    output: {
        filename: 'JS/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'CSS/styles.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/fonts', to: 'public/fonts' },
                { from: 'static/images', to: 'static/images' }
            ]
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}