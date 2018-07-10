var FirstPage = require('./HomePageObject.js') ;
var SecondPage = require('./SearchPropertyResults.js') ;
var ThirdPage  = require('./PropertyDetails.js') ;




describe('end-to end testing',function(){
	var firstPage = new FirstPage() ;
	var secondPage = new SecondPage() ;
	var thirdPage = new ThirdPage();
	//TEst1
	it('should navigate to the URL',function(){
		
		firstPage.go() ;
		
	});
	
	//test 2
	it("should enter Morgan town into the search page", function(){
		firstPage.enterKey() ;
		
	}) ;
	//test 3 
	it("Should press the search button",function(){
		firstPage.EnterSearchbutton() ;
	}) ;


//describe("Validation of the results is greater than 0", function(){
	//test 4 ; display the search results in morgantown
//	describe("The Search Results are displayed on the next page",function(){
	//	var secondPage = new SecondPage() ;
		//var thirdPage = new ThirdPage();
		it("Should wait untill the Page is loaded and then count the number o", function(){
			secondPage.loadPage() ;
			var count = secondPage.countSearchResults() ;
			expect(count).toBeGreaterThan(0).then(function(){
				browser.sleep(2000) ;
			}) ;
		}) ;

	
//test 5 : Click on the second result
	it("Should select the second result from the result searches", function(){
			secondPage.selectHome() ;
		});
	
	//Test 6 : The price should be the same in both the second & third page
//});
//describe('The price on the second and third page should match',function(){
	//var secondPage = new SecondPage() ;
//	var thirdPage = new ThirdPage() ;
	
it("Should validate the price of the house in both the pages should be same",function(){
		
		var priceFromTheSecondPage = secondPage.priceOfHomeDisplayedinSecondPage() ;
		var pricefromthethirdPage = thirdPage.priceFromHomeDetails() ;
		expect(priceFromTheSecondPage).toEqual(pricefromthethirdPage).then(function(){
			browser.sleep(2000) ;
		});
		//expect(priceFromTheSecondPage).toEqual(pricefromthethirdPage) ;
	});
	});