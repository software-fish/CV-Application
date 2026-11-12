const path = require('path')

module.exports = {
    entry: './src/index.html',
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    mode: 'development'
}