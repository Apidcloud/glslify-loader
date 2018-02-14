module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(glsl|frag|vert)$/, 
        loader: 'raw-loader', 
        exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/, 
        loader: './index', 
        exclude: /node_modules/
      }
    ]
  }
}
