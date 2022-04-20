const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const postcssPlugins = [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('autoprefixer')
]

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postcssPlugins}}}]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'app')
        },
        compress: true,
        port: 3000,
        hot: true
    }
})