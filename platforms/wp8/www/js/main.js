/**
 * Created by Mathew on 2/28/15.
 */
var current = document.getElementById('overview');
Hammer(current).on("swipeleft", function() {
    console.log('swipeleft');

});
Hammer(current).on("swiperight", function() {
    console.log('swiperight');

});