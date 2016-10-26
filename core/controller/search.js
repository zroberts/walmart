//	Walmart Search API
// https://developer.walmartlabs.com/docs/read/Search_API

//console.log('hitting the search!')
var request = require('request');
var url = 'http://api.walmartlabs.com/v1/search?apiKey=';

var validProperties = ["query","categoryId","start","sort","order","format","responseGroup", "numItems", "facet", "facet.filter", "facet.range"];

function search(config,params,callback){

	var formedURL = url + config.apikey;
	
	//add linkshare if one exists
	if(config.lsPublisherId)
	{
		formedURL	+="&lsPublisherId="
					+	config.lsPublisherId;
	}
	
	formedURL += paramGen(params);
	
	request(formedURL, function (errors, response, body) {
		//console.log("request was made");
		if (!errors && response.statusCode == 200) {
			callback(JSON.parse(body));
		}else if(errors){
			console.log("The following errors occurred");
			console.log(errors);
		}else if(response.statusCode != 200){
			switch(response.statusCode){
				case 400:
					console.log("Code 400: Bad Request");
					break;
				case 403:
					console.log("Code "+response.statusCode + ": Forbidden. Try checking apikey");
					break;
				case 404:
					console.log("Code "+response.statusCode + ": Wrong Endpoint");
					break;
				case 414:
					console.log("Code "+response.statusCode + ": Request URI too long");
					break;
				case 500:
					console.log("Code "+response.statusCode + ": Internal Server Error");
					break;
				case 502:
					console.log("Code "+response.statusCode + ": Bad Gateway");
					break;
				case 503:
					console.log("Code "+response.statusCode + ": Service Unavailable/API Maintenance");
					break;
				case 504:
					console.log("Code "+response.statusCode + ": Gateway timeout");
					break;

			}
		}
	});
}

function paramGen(params){
	var reqURL="";
	for (var property in params){
		// ignore all properties that aren't in the validProperties list
		if( validProp(property) ){
			reqURL = reqURL + "&" + property + "=" + params[property];
		}
	}
	
	return reqURL;
}

/*
Fix this I don't like how slow it is
*/

function validProp(property){
	for(var i = 0; i < validProperties.length; i++){
		if(validProperties[i] == property){
			return true;
		}
	}
	return false;
}

module.exports = search;

