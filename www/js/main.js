/**
 * Created by Mathew on 2/28/15.
 */
window.onload=function waitonswipe() {
    var current = document.getElementById('overview');
    Hammer(current).on("swipeleft", function swipeleft() {
        console.log('swipeleft');

    });
    Hammer(current).on("swiperight", function swiperight() {
        console.log('swiperight');

    });
    $('#overview').click(function click(){
        console.log('click')
    });
};