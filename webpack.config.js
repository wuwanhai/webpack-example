const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        a: './src/a.js',
        b: './src/b.js',
        C: './src/c.js'
    },
    output: {
        filename: 'js/[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: 'body',
            title: 'Hello My Name Is a.html',
            date: new Date(),
            excludeChunks: ['b', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'body',
            title: 'Hello My Name Is b.html',
            date: new Date(),
            excludeChunks: ['a', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'body',
            title: 'Hello My Name Is c.html',
            date: new Date(),
            excludeChunks: ['b', 'a']
        })
    ]

}