var config = require('./controller/config.js');
var search = require('./controller/search.js');

//console.log('hitting the core');
function walmart(params,callback){
	if(params.type == "search"){
		search(config,params,callback);
	}
}
module.exports = walmart;

