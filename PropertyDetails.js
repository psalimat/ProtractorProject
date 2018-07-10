var ThirdPage = function(){
	
	//Locators 
	//var price =   element(by.css("#ldp-pricewrap > div > div > span]")) ;
	
	var price = element(by.css("span[itemprop*='price']")) ;
	
	var EC = protractor.expectedCapabilities ;
	// var valueFromPage2 = element(by.css("div[itemprop='price']")) ;
	
	this.priceFromHomeDetails = function(){
		
		var priceContent = price.getText();
		return priceContent;
		
		
	}
	
	
	this.loadPage = function(){
		
		
		browser.wait(EC.visibilityOf(price), 5000);
		
		
	//	browser.wait(EC.elementToBeClickable(SearchResults.get(1)),3000) ;
		
	}
	
	
};
module.exports = ThirdPage ;