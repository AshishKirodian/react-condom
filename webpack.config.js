var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './react-condom.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'react-condom.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}