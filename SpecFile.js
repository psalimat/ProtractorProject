var FirstPage = require('./HomePageObject.js') ;
var SecondPage = require('./SearchPropertyResults.js') ;
var ThirdPage  = require('./PropertyDetails.js') ;

describe('End-to end testing',function(){
	var firstPage = new FirstPage() ;
	var secondPage = new SecondPage() ;
	var thirdPage = new ThirdPage();
	
	
	/*  Test 1 : A new browser opens and the we are navigated to the website        */
	it('Should open a new browser and navigate to the Homepage of the website',function(){
		
		firstPage.go() ;
		
	});
	
	/* Test 2 : Search for Morgantown,WV by typing it in the search field                      */ 
	it("Should type MORGANTOWN,WV in the search field in the HomePage of the website", function(){
		
		firstPage.enterKey() ;
		
	}) ;
	
	/*Test 3: Click on the Search Button so that the name of the city to be searched is submitted   */
	it("Should Click on the Search Button that is displayed next to the Search Box in the HomePage of the website",function(){
		
		firstPage.EnterSearchbutton() ;
	}) ;
	
	/*Test 4 : Display the Search Result and verify that the number of search results are greater than 0   */
	it("Display the Search Result and verify that the number of search results are greater than 0", function(){
		
		secondPage.loadPage() ;
		var count = secondPage.countSearchResults() ;
		expect(count).toBeGreaterThan(0).then(function(){
		browser.sleep(2000) ;
		
		}) ;
	}) ;

	
	/* Test 5 : Click on the second Address from the list of Search Results          */
	it("Should select the second Address from the list of Search Results", function(){
			secondPage.selectHome() ;
	});
	
	/*Test 6 : Verify that the price on the property displayed in the Search Results page is the same as the price of the property in the Property Details Page   */
	it("Should validate that the price of the property displayed in the Search Results page is the same as the price of the property in the Property Details Page",function(){
		
		var priceFromTheSecondPage = secondPage.priceOfHomeDisplayedinSecondPage() ;
		var pricefromthethirdPage = thirdPage.priceFromHomeDetails() ;
		expect(priceFromTheSecondPage).toEqual(pricefromthethirdPage).then(function(){
			browser.sleep(2000) ;
		});
		
	});
	});