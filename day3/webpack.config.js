const fs = require('fs');
const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = function(webpackEnv) {
    console.log('webpackEnv', webpackEnv);

    return {
        watch: false,
        //시작
        entry: {
            index: './src/index.jsx'
        },
        output: {
            filename: '[name].js',
            chunkFilename: '[name].chunk.js',
            // path: __dirname + '/../src/main/resources/static',
            // `publicPath` is where Webpack will load your bundles from (optional)
            // publicPath: 'sh-da-prj/dist/'
        },
        mode: 'development',
        // mode: 'production',
        resolve: {
            extensions: ['.js','.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ['css-loader',"postcss-loader"],
                },
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: '10000',
                        mimetype: 'application/octet-stream'
                    }
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader'
                }
            ]
        }
    }
}
