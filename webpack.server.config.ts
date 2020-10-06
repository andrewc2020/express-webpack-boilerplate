import path from 'path';
import  nodeExternals from 'webpack-node-externals'
module.exports = (env: any, argv: any) => {
  const SERVER_PATH = path.join(__dirname, (argv.mode === 'production') ?  'src/server/server-prod.js' : 'src/server/server-dev.js')
return ({
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/,
          query: {
            // we don't want any declaration file in the bundles
            // folder since it wouldn't be of any use ans the source
            // map already include everything for debugging
            declaration: false,
          }
      },
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  })
}