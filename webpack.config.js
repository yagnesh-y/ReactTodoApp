var react = require('react');
var webpack = require('webpack');
var path = require('path');

module.exports= {
    
    entry : {
        app: './src/index.js'
    },
    output : {
        filename: './dist/bundle.js',
        sourceMapFilename: './dist/bundle.map'
    },
    devTool: '#sourcemap',
    module: {
        
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/ ,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
    
}