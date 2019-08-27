const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const basicConfig = {
    mode: isProduction ? 'production' : 'development',
    stats: {
        modules: false
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        clientLogLevel: 'error',
        compress: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, 'client', 'src'),
            '@node_modules': path.join(__dirname, 'node_modules'),
            '@shared': path.join(__dirname, 'client', 'src', 'shared'),
            '@components': path.join(__dirname, 'client', 'src', 'components')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                // exclude: /node_modules/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    }
};

const configs = [
    Object.assign({}, basicConfig, {
        name: 'Vue Template',
        entry: [
            path.join(__dirname, 'client', 'src', 'main.js')
        ],
        output: {
            publicPath: '',
            path: path.join(__dirname, 'client', 'dist', 'bundle'),
            filename: 'bundle.[hash].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './client/src/index.html',
                inject: 'body',
                title: 'Vue Template',
                filename: 'index.html'
            }),
            // Quill
            new webpack.ProvidePlugin({
                Quill: 'quill'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new FriendlyErrorsPlugin({ clearConsole: false })
        ]
    }),
];

module.exports = configs;
