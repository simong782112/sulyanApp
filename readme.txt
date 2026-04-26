production előállítása
https://webpack.js.org/guides/production/

ezzel kell a fordítást csinálni:
npm run build 

ford t s
npm install --save-dev webpack-merge

L p sek:

1. npm init a c lk nyvt rban
	-> l trej n a package.json

2.l trehozzuk a c lk nyvt rban az al bbi k nyvt r strukt r t manu lisan
	-> + app
	-> + assets
	-> + dist
	-> index.html

3. telep tj k a WebPack-et: npm i  save-dev webpack 
	-> l trej n a node_modules k nyvt r tele alk nyvt rral

4. k sz ts nk egy webpack.config.js nev  filet a package.json mell 
	tartalma legyen:

var path = require('path');
 
module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

5. lefuttatjuk a  webpack  parancsot
	-> l trej n a bundle.js -> m k dik az index.html
Megjegyz s: ha a webpack parancs nem fut c lszer  ezt a parancsot lefuttatni:
	npm install -g webpack
		-> ut na m k dni fog
		
6. css kezel se assets k nyvt rba csin lni kell egy main.css filet
7. Telep ts k a sz ks ges csomagokat az npm seg ts g vel:  npm i  save-dev css-loader extract-text-webpack-plugin .
8., Ahhoz, hogy a WebPack megtal lja a CSS fileokat azokat be kell import lni f gg s gk nt, adjuk is hozz  ezt az  app.js -hez:
	az app.js-be ezt kell betenni:
		import '../assets/css/main.css';
	
9.  eg sz ts k ki a webpack.config.js-t, hogy a CSS fileokat is feldolgozza:
		...
		var ExtractTextPlugin = require('extract-text-webpack-plugin');
		...
		module: {
				rules: [
					{
						test: /\.css$/,
						use: ExtractTextPlugin.extract({ use: 'css-loader' })
					}
				]
			},
			plugins: [
				new ExtractTextPlugin('styles.css')
			]
	
10. Bootstrap plugin felhaszn l sa
	- Telep t s: npm i bootstrap
	- app.js be: import 'bootstrap/dist/css/bootstrap.css';
	- webpack lefuttat sa , de nem fog els re futni, mert kell hozz  az npm i file-loader,  gy a webpack.config.js-be pedig ez:
	
		rules
		...
		,
				{
					test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
					use: 'file-loader'
				}
				
11. Uglify plugin van alapb la webpack-ban
	- webpack.config.js -be:
	
		const webpack = require('webpack');
		...
		plugins
		..
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new webpack.optimize.UglifyJsPlugin({
				beautify: false,
				mangle: {
					screw_ie8: true,
					keep_fnames: true
				},
				compress: {
					screw_ie8: true
				},
				comments: false
			})		
			
Forr s: https://reiteristvan.wordpress.com/2017/05/01/webpackolas-numero-uno/

12. Typescript haszn lata (https://webpack.js.org/guides/typescript/)
13. Vuejs beilleszt se (https://github.com/Microsoft/TypeScript-Vue-Starter#typescript-vue-starter)
	npm install --save-dev typescript webpack ts-loader css-loader vue-loader vue-template-compiler@2.2.1
14. Jquery haszn lata
	npm install jquery
	
X. HASZNOS:
	Program ford t sa:
	 - npm run build : manu lisan
	 - npm run build -- --watch : ahogy v ltoz s t rt nik a fileban megcsin lja a ford t st automatikusan
 	Program futtatása:
	- python -m http.server 8080

