const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /node_module/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    mode: "development",
    devServer: {
        static: './docs',
    },
    optimization: {
        runtimeChunk: 'single',
    },
};