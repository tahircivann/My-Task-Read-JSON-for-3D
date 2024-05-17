const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // This plugin will inject the bundle into your HTML file
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',  // Sets the mode to development to enable some webpack's built-in optimizations
    entry: './src/index.ts',  // Main entry point for your TypeScript file
    output: {
        filename: 'bundle.js',  // Output filename
        path: path.resolve(__dirname, 'dist'),  // Output path where the bundled file will be placed
    },
    devtool: 'inline-source-map',  // Enable source map for better debugging experience
    module: {
        rules: [
            {
                test: /\.tsx?$/,  // RegEx to find .ts or .tsx files
                use: 'ts-loader',  // Use ts-loader for handling TypeScript files
                exclude: /node_modules/,  // Exclude the node_modules directory
            },
            {
                test: /\.css$/,  // RegEx to find .css files
                use: ['style-loader', 'css-loader'],  // Use these loaders to handle CSS files
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],  // Automatically resolve these file extensions
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './public/index.html'
      }),
      new CopyWebpackPlugin({
          patterns: [
              { from: 'public/projects.json', to: 'projects.json' }
          ]
      })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),  // Serve your static files from 'dist'
    },
    compress: true,  // Enable gzip compression
    port: 9000,  // Port to run your server
    open: true,  // Open the browser after the server starts
    hot: false,  // Enable hot module replacement

}
};