const webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackAutoInject = require('webpack-auto-inject-version');
 
module.exports = {
    entry: './app/app.ts',
    devtool: '#eval-source-map', //'inline-source-map',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist')
    },
	module: {
        rules: [    
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                    attrs: [':data-src']
                    }
                }
            },                  
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ use: 'css-loader' })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                    // the "scss" and "sass" values for the lang attribute to the right configs here.
                    // other preprocessors should work out of the box, no loader config like this necessary.
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                    // other vue-loader options go here
                }
            },  
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]                    
                  }
            }                        
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.vue', '.json' ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            typeahead: 'typeahead.js'
          }
    }, 
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },        
    plugins: [
        new WebpackAutoInject({
            // specify the name of the tag in the outputed files eg
            // bundle.js: [SHORT]  Version: 0.13.36 ...
            SHORT: 'CUSTOM',
            SILENT: false,
            PACKAGE_JSON_PATH: './package.json',
            components: {
                AutoIncreaseVersion: true,
                InjectAsComment: true,
                InjectByTag: true
            },
            componentsOptions: {
                AutoIncreaseVersion: {
                    runInWatchMode: true // it will increase version with every single build!
                },
                InjectAsComment: {
                    tag: 'Version: {version} - {date}',
                    dateFormat: 'hh:MM:ss TT'
                },
                InjectByTag: {
                    fileRegex: /\.+/,
                    // regexp to find [AIV] tag inside html, if you tag contains unallowed characters you can adjust the regex
                    // but also you can change [AIV] tag to anything you want
                    AIVTagRegexp: /(\[AIV])(([a-zA-Z{} ,:;!()_@\-"'\\\/])+)(\[\/AIV])/g,
                    dateFormat: 'hh:MM:ss TT'
                }
            },
            LOGS_TEXT: {
                AIS_START: 'AIV started'
            }
        }),            
        new ExtractTextPlugin('styles.css'),
		new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })/*,
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
        })*/        		
    ],
    
};