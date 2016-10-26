var config = require('./config.js');
var search = require('./search.js');

function walmartApi(params, callback){
	search(config, params, callback);
}
module.exports = walmartApi;