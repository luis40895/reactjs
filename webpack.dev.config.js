const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

let config = {
    context: APP_DIR,
    entry: ['./index.js'],

    resolve: {
        extensions: [".js", ".jsx"]
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader']
            }, 
            { 
                test: /\.html$/, loader: 'html-loader' 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            hash: true,
         }
      )
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
}

module.exports = config;