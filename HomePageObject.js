var FirstPage = function(){
	
//Loactors of the first page
	
	var searchBox = element(by.css('#searchBox')) ;
	var searchButton = element(by.xpath("//*[@id='homepage-header']/div[2]/div/div[2]/span/button[2]")) ;
	var EC = protractor.ExpectedConditions ;
	
	
	
	
	/*Function to navigate to the website  */
	
	
	/* Navigate to the Website */
	this.go = function(){
		browser.waitForAngularEnabled(false) ;	
		 
		
			    // implicit and page load timeouts
			   browser.manage().timeouts().pageLoadTimeout(40000);
			    browser.manage().timeouts().implicitlyWait(25000);
		 //Fetch the URL
		
	    browser.get('https://www.realtor.com/');
		
	};
	
	/* Enter the text Mortgan Town, WV in the search box */
	this.enterKey = function(){
		searchBox.sendKeys("MorganTown,WV") ;
		
		
	};
	
	/*  Click on the search button  */
	this.EnterSearchbutton = function(){
		 browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform() ;
		 browser.actions().sendKeys(protractor.Key.ENTER).perform().then (function() {
			 browser.wait(EC.urlContains("Morgantown_WV"),5000);
		 
			 })  ; 
		

}
};
module.exports = FirstPage ;