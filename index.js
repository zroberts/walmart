
var walmart = require('./core');
var walmartApiKey = {
	apikey: ''
}

module.exports = {

	setApi: function(userApiKey){
		walmartApiKey = {
			apikey: userApiKey
		}
	},
	search: function(sItems, callback){
		//console.log(sItems.searchTerm);
		//
		var search;
		if(sItems.searchTerm && sItems.minPrice && sItems.maxPrice){
			search = {
				"type"			: "search",
				"query" 		: sItems.searchTerm,
				//"itemId" 		: "174126186",
				//"categoryId" 	: "3914",
				//"start" 		: "1",
				"sort" 			: "price",
				"order" 		: "desc",
				"numItems"		: "10",
				"format"		: "json",  
				"responseGroup" : "base",
				"facet" 		: "on", 
				"facet.range" 	: "price:["+sItems.minPrice+" TO "+sItems.maxPrice+"]"
			};
		}else if(sItems.searchTerm){
			search = {
				"type"			: "search",
				"query" 		: sItems.searchTerm,
				//"itemId" 		: "174126186",
				//"categoryId" 	: "3914",
				//"start" 		: "1",
				"sort" 			: "price",
				"order" 		: "desc",
				"numItems"		: "10",
				"format"		: "json",  
				"responseGroup" : "base"
				//"facet" 		: "on", 
				//"facet.range" 	: "price:["+sItems.minPrice+" TO "+sItems.maxPrice+"]"
			};
		}else{
			console.log("Please search for something");
			return;
		}


		//console.log('HERE again');
		if(walmartApiKey.apikey == ''){
			console.log('Pleas provide an API key')
		}else{
			walmart(walmartApiKey, search, function(resp){
				//onsole.log('HERE!');
				//console.log(resp);
				//console.log(resp.items.length);
				var outPut = [];
				for(var i = 0; i < resp.items.length; i++){
					var tempItem = {
						'id': resp.items[i].itemId,
						'sku' : 'No SKU Available',
						'name' : resp.items[i].name,
						'price': resp.items[i].msrp,
						'saleprice': resp.items[i].salePrice,
						'category': resp.items[i].categoryPath,
						'url': resp.items[i].productUrl,
						'imageUrl': resp.items[i].mediumImage,
						'provider': 'walmart',
						'reviews': resp.items[i].customerRating
					};
					outPut.push(tempItem);
				};

				callback(outPut);
			});
		}
	}
}
//module.exports = walmartApi;