const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");
//引入抽离css插件
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const config = webpackMerge(baseConfig,{
    mode:"production",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                //抽离css
                use:ExtractTextWebpackPlugin.extract({
                    use:[
                        {loader:"css-loader"},
                        {loader:"postcss-loader"},
                        {loader:"sass-loader"}
                    ],
                    fallback: "style-loader",
                })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:"css/[name].[hash:8].css"
        })
    ]
})

module.exports = config;