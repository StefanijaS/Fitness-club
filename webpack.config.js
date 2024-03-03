
var path = require('path')
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports =  {
    module: {
        rules:[
            {
               test: /\.html$/,
               use:[
                   {
                       loader:"html-loader",
                       options:{minimize:true}
                   },
               ]
            },
            {
                test:/\.(jpg|png)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'img/',
                            publicPath:'img/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html",
            inject:true
        }),
        new HtmlWebPackPlugin({
            template:"./src/spaCenter.html",
            filename:"./spaCenter.html",
            inject: true
        }),
        new HtmlWebPackPlugin({
            template:"./src/exercises.html",
            filename:"./exercises.html",
            inject: true
        }),
        new HtmlWebPackPlugin({
            template:"./src/abs.html",
            filename:"./abs.html",
            inject: true
        }),

        new HtmlWebPackPlugin({
            template:"./src/armsAndShoulders.html",
            filename:"./armsAndShoulders.html",
            inject: true
        }),

        new HtmlWebPackPlugin({
            template:"./src/legs.html",
            filename:"./legs.html",
            inject: true
        }),

        new HtmlWebPackPlugin({
            template:"./src/fullBody.html",
            filename:"./fullBody.html",
            inject: true
        }),
    ],
}





