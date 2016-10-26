
var walmart = require('./core');

module.exports = {
	search: function(sItems, callback){
		//console.log(sItems.searchTerm);
		var test = {
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


		console.log('HERE again');
		walmart(test, function(resp){
			console.log('HERE!');
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
//module.exports = walmartApi;