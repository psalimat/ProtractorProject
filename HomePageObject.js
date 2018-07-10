/*/* question-page.js 
var QuestionPage = function() {
  this.question = element(by.model('question.text'));
  this.answer = element(by.binding('answer'));
  this.button = element(by.className('question-button'));

  this.ask = function(question) {
    this.question.sendKeys(question);
    this.button.click();
  };
};

module.exports = QuestionPage;
 * 
 * 
 * 
 * 
 * 
 */









var FirstPage = function(){
	
//Loactors of the first page
	//this.URL = "www.realtor.com/" ;
	var searchBox = element(by.css('#searchBox')) ;
	var searchButton = element(by.xpath("//*[@id='homepage-header']/div[2]/div/div[2]/span/button[2]")) ;
	//var searchButton = element(by.css("div[class*= 'btn btn-primary js-search']")) ;
	//Actions 
	//Function to navigate to the website
	//Function 1
	
	
	
	this.go = function(){
		browser.waitForAngularEnabled(false) ;	
		 
		
			    // implicit and page load timeouts
			    browser.manage().timeouts().pageLoadTimeout(40000);
			    browser.manage().timeouts().implicitlyWait(25000);
		 //Fetch the URL
		
	    browser.get('https://www.realtor.com/');
		
	};
	
	//Function 2
	this.enterKey = function(){
		searchBox.sendKeys("MorganTown,WV") ;
		
		
	};
	
	//Function3
	this.EnterSearchbutton = function(){
		 browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform() ;
		 browser.actions().sendKeys(protractor.Key.ENTER).perform().then (function() {
			 
			 browser.sleep(5000) ;
		 
		 })  ;

}
};
module.exports = FirstPage ;