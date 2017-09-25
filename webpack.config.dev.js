//npm run dev 时候不生成 css（或者说不使用extract-text-webpack-plugin），js代码不被压缩

var path = require('path')
var webpack = require('webpack')

// 这个在 npm run dev 和 npm run build 时候是不同的
var TARGET = process.env.npm_lifecycle_event
var APP_PATH = path.join(__dirname, '/src')

module.exports = {
    entry: __dirname + "/src/index.js",//
    output: {
        path: __dirname + "/public",
        filename: "public.js"
    },
    devtool: 'none',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                ]
            }
        ]
    }
};
