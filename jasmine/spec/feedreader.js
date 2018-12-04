/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

 /* Starter code provided by Udacity */

 /* Developed by Moses Ajireloja, for Front-End Web Developer Nanodegree at Udacity*/

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

         // This test suite ensures that required variables are defined and not empty

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // This section tests to ensure that the URL of each feed is defined and not empty
          it('URL must be defined and not empty', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

         // This section tests to ensure that the name of each feed is defined and not empty
           it('name must be defined and not empty', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });

    });


    // THE MENU

        // This section tests to ensure that the menu element is hidden by default
         describe('The menu', function() {

                it('menu must be hidden by default', function() {
                    expect($('body').hasClass('menu-hidden')).toBe(true);

            });

        // This section tests to ensure that the menu changes visibility when the menu icon is clicked.

             // This section tests to ensure that the menu visibility changes
            it('must toggle visibility when clicked', function () {

            // Click on menu
            $('.menu-icon-link').trigger('click');

            // Check expectation
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // Click on menu
            $('.menu-icon-link').trigger('click');

            // Check expectation
            expect($('body').hasClass('menu-hidden')).toBe(true);

            });

    });
        /*
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // This section ensures that the loadFeed function is called and completes its work.
         describe('Initial Entries', function() {

                beforeEach(function(done) {
                    loadFeed(0, done);
                });

        // This section tests to ensure that there is at least a single .entry element within the .feed container.

                it('must contain at least one element', function(){
                    expect($('.feed .entry').length).toBeGreaterThan(0);
                });

            });


        // New Feed Selection
         describe('New Feed Selection', function(){

            let feedData;

            // This section tests to ensure that the content changes when a new feed is loaded by the loadFeed function
            beforeEach(function(done) {
                loadFeed(0, function() {
                    feedData = $('.feed').html();
                    loadFeed(1, done);
                });
            });

            // Change content when a new feed is loadded
            it('must change content', function(){
                expect($('.feed').html()).not.toEqual(feedData);
            });
        });
}());