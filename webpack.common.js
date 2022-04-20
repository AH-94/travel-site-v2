const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require ('fs-extra');

const pages = fse.readdirSync('./app').filter(function(file) {
    return file.endsWith('.html');
}).map(function(page) {
    return new HtmlWebpackPlugin({
        filename: page,
        template: `./app/${page}`
    })
})

module.exports = {
    entry: './app/assets/scripts/App.js',
    plugins: pages
}