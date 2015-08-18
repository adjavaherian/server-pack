var path = require('path');
var fs = require('fs');

//require common.js for node_modules (better for server)
var node_modules = fs.readdirSync('node_modules').filter(function(x) { return x !== '.bin' });
function node_externals(context, request, cb) {
    if(node_modules.indexOf(request) !== -1) {
        cb(null, 'commonjs ' + request);
        return;
    }
    cb();
}

//require common.js for configs that might change
var config_dir  = fs.readdirSync(path.join(__dirname, 'config')).map(function(x) { return x.split('\.')[0] });
var config_modules  = [].concat(config_dir);

function config_externals(context, request, cb) {
    var clean_request = request.split('/').splice(-1)[0];
    if (config_modules.indexOf(clean_request) !== -1) {
        cb(null, 'commonjs ' + request);
        return;
    }
    cb();
}

module.exports = {
    target: 'node',
	entry: {
		index: './index.js'
	},
	output: {
		libraryTarget: 'commonjs2',
		filename: 'output.js'
	},
	resolve: {
		root: path.join(__dirname),
		fallback: path.join(__dirname, 'node_modules'),
		modulesDirectories: ['node_modules'],
		extensions: ['', '.json', '.js', '.jsx', '.scss', '.png', '.jpg', '.jpeg', '.gif']
	},
    node: {
        __dirname: true,
        __filename: true,
        fs: 'empty',
        tls: 'empty',
        net: 'empty',
        console: false
    },
    module: {
        // Disable handling of unknown requires and requires with a single expression
        unknownContextRegExp: /$^/,
        exprContextRegExp: /$^/,
        unknownContextCritical: false,
        exprContextCritical: false,
        loaders: [
            {
                test: /\.json$/,
                loaders: ['json-loader']
            }
            , {
                test: /\.jsx$/,
                loaders: ['babel']
            }
        ]
    },
    externals: [node_externals, config_externals, {'react/addons' :'commonjs react/addons'}]
};
