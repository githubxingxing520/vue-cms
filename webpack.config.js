const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:"./src/main.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
      },
      plugins:[
          new HtmlWebpackPlugin({template:path.join(__dirname,"./src/index.html")}),
          new VueLoaderPlugin()
      ],
      module:{
        rules: [
            { test: /\.css$/, use: ["style-loader","css-loader"] },
            { test: /\.less$/, use: ["style-loader","css-loader","less-loader"] },
            { test: /\.scss$/, use: ["style-loader","css-loader","sass-loader"] },
            { test: /\.(jpg|jpeg|gif|png|bmp)$/, use: "url-loader?limit=5000&name=[hash:8]-[name].[ext]" },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },
            { test: /\.js$/, use: "babel-loader",exclude:/node_modules/ },
            { test: /\.vue$/, use: "vue-loader" }
          ]
      },
      resolve: {
        alias: {
        'vue$': 'vue/dist/vue.js'
        }
      }
}