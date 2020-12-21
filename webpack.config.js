const path = require('path');

module.exports = {
  entry: './docs/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './docs'),
  },
  mode: 'development'
};