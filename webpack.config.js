const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/app.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    failOnError: true,
                    failOnWarning: true,
                    emitError: true,
                    formatter: require("eslint-friendly-formatter")
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "Vue Generic Template",
            template: "index.html"
        })
    ],
    devtool: false
};
