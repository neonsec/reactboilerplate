const path = require('path')
module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
      alias: {
      BoilerPlate: path.resolve(__dirname,'app/components/sample.jsx')
    },
    extensions: ['.js','.jsx']
  },
  module:{
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react','es2015']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
};
