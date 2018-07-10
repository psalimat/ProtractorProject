var SecondPage = function() {
	
	//Count the results
	
	//locators
//	var SearchResults = element.all(by.css("div[class*='srp-item-body']")) ;
	 var SearchResults = element.all(by.css("div[data-label*='property-photo']")) ;
	//var price =  element(by.css("span[itemprop *='price']")) ;
	 var price = element.all(by.css("div[class*='price']")).get(1) ;
	var EC = protractor.ExpectedConditions ;

	//Function - to calculate the number of results are greater than 0
	this.countSearchResults = function() {
		
		
		
		return SearchResults.count() ;
	}
	
	this.loadPage = function(){
		
		  // implicit and page load timeouts
	  //  browser.manage().timeouts().pageLoadTimeout(40000);
	    //browser.manage().timeouts().implicitlyWait(25000);
	    browser.wait(EC.elementToBeClickable(SearchResults.get(1)),3000) ;
		
	}

	//select the second resultselectHomeDetails
	this.selectHome = function(){
			
		SearchResults.get(1).click() ;
	}
	
	this.priceOfHomeDisplayedinSecondPage = function(){
		
		var priceContent = price.getText();
		return  priceContent;
	}
	
};
module.exports = SecondPage ;