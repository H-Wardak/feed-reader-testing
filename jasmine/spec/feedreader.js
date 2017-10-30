/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite. This suite is all about the RSS
    * feeds definitions.
    */
    describe('RSS Feeds', function() {
        //check if allFeeds are defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Test if allFeeds' URLs are defined and not empty
        it('allFeeds URL are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual("");
            });
         });

        ////Test if allFeeds' names are defined and not empty
        it('allFeeds has name and it not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual("");
            });
         });
    });

    //This is 2nd test suit. It is about testing the menu visibility
    describe('The menu', function(){

        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         
        it('is displayed by click', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

        
    //This is the 3rd test suite named "Initial Entries"
    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });
        
        it('has an entry element within feed container', function(done){
            expect($('.feed .entry').length).not.toBe(0);
            done();
         });
    });

    //This is the 4th test suite named "New Feed Selection"
    describe('New Feed Selection', function(){
        var oldFeed; 

        beforeEach(function(done){
            //load random feed 
            loadFeed(0, function(){
                //store the feed content
                oldFeed = $('.feed').html();
                //load different feed
                loadFeed(1, done);
            });
        });

        it('changed the content', function(done){
            expect($('.feed').html()).not.toEqual(oldFeed);
            done();
         });

    });
}());
