describe('Home Page Navingation', function() {
  it('Open Home Pge for Realtor.com', function() {
	 browser.waitForAngularEnabled(false) ;	
	 
	 
	 //Fetch the URL
    browser.get('https://www.realtor.com/'); 
    //var dog = element(by.name('dog_name'));
 //element(by.name('q')).sendKeys("MoranTown,WV") ; 
    
    
    
    //Locate the search box and send keys
 browser.driver.findElement(by.css('#searchBox')).sendKeys("MorganTown,WV");
 
 
 //enter the data - morgan town that we would like to search
 //browser.driver.findElement(by.xpath("//*[@id='homepage-header']/div[2]/div/div[2]/span/button[2]")).click().perform()  ;
 browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform() ;
 browser.actions().sendKeys(protractor.Key.ENTER).perform().then (function() {
	 
	 browser.sleep(5000) ;
 })  ;
/* browser.actions().mouseMove(element(by.xpath("//*[@id='homepage-header']/div[2]/div/div[2]/span/button[2]"))).perform().then(function(){
	
	 
	 
	 "div[ng-mouseover*='onSearchResultOver']"
	 browser.sleep(5000) ;
	 
	 
 }) ;*/ 
 
 
//console.log("Number of links "+element.all(by.css("div[class='srp-item-body']")).count());
 
 //countinf the number of results that are displayed.
console.log("Number of links "+element.all(by.css("div[class='srp-item-body']")).get(1));
element.all(by.css("div[class='srp-item-body']")).getTex
});
});
  