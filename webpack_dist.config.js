var config = require('./config.js');
module.exports = {
	entry: {
        'index': config.srcPath + 'js/app/index' + config.jsSuffix
	},
	output: {
		filename: '[name].min.js'
	},
	module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit='+ config.imgLimit +'' }, // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.html$/, loader: 'html-loader'}
        ]
    }
}