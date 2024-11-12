const path = require('path');  // Importation du module path

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')  // Utilisation de path pour résoudre le chemin
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Cible les fichiers .js et .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,  // Cible les fichiers .css
        use: ['style-loader', 'css-loader']  // Utilise style-loader et css-loader
      },
      {
        test: /\.svg$/,  // Cible les fichiers .svg
        use: ['@svgr/webpack', 'file-loader']  // Utilise svgr et file-loader pour les SVG
      }
    ],
  },
  mode: 'development',
};
