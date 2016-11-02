# Walmart Api 
CS 320 XML
WVUP Fall 2016


## Setup Object
```
var walmart = require("walmart");
```

## Setting API Key
```
walmart.setApi(<API KEY>);
```

##########
## Searching
```
walmart.search(<searchObject>, function(err, res){
	
});
```
searchObject is a JSON Object, with searchTerm required, minPrice and maxPrice optional

### EXAMPLE -
```
var serachObject = {
  searchTerm : 'Playstation',
  minPrice   : '100',
  maxPrice   : '200'
}
```


### RETURN 
will return json object with the following fields
```
id 	(products ID)
name 	(products name)
price	(suggested retail price)
saleprice (current price of the object)
category (the Category Path example - Video Games/Playstation 3/Playstation 3 Consoles)
url  (productUrl to click to product)
image url (url for the "mediumImage")
provider (Walmart)
reviews (Numeric value representing how many starts out of 5)
```


