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
id: 	   <the product ID>,
name:	   <the product name>,
price:	   <msrp>,
saleprice: <current price>,
category:  <category parth from walmart>,
url: 	   <URL to product on Walmart.com>,
imageUrl:  <url for the medium-sized image>,
provider:  <STATIC Walmart>,
reviews:   <number out of 5>
```


