/**
 * Created by Mathew on 2/28/15.
 */
window.onload=function waitonswipe() {
    var current = document.getElementById('#overview');
    $('#overview').Hammer.on("swipeleft", function swipeleft() {
        console.log('swipeleft');
        $('#contact').animate({left: '100%'})
    });
    Hammer(current).on("swiperight", function swiperight() {
        console.log('swiperight');
        $('#overview').animate({left: '100%'})
    });
    $('#overview').click(function click(){
        console.log('click')
    });
};