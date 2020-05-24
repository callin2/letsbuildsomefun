const fs = require('fs');
const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = function(webpackEnv) {
    console.log('webpackEnv', webpackEnv);

    return {
        entry:  './index.jsx',
        output: {
            filename: '[name].js',
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
            ]
        }
    }
}