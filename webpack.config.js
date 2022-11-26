const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                    alias: {
                        "@": path.resolve(__dirname, "src"),
                    }
                },
                use: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use:
                    [
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require("sass")
                            }
                        }
                    ],
            },
        ]
    },
    devtool: prod ? undefined : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};