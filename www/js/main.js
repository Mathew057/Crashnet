/**
 * Created by Mathew on 2/28/15.
 */
window.onload=function waitonswipe(current) {
    var current = document.getElementById('phone');

// create a simple instance
// by default, it only adds horizontal recognizers
    function swipe() {
        var front = document.getElementById('overview');
        var mc = new Hammer(current);
        console.log(current);
// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
        mc.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});

// listen to events...
        mc.on("swipeleft swiperight tap press", function (ev) {
            if (ev.type == "swiperight") {
                console.log('swiperight');
                 if ($('#overview').css({left: '0'})){
                     $('#overview').animate({left: '80%'}, 1000);
                     $('#contacts').css({left: '-80%'});
                     $('#id').animate({left: '0'}, 1000);
                 }
                 else if ($('#overview').css({left: '80%'}){
                     $('#contacts').animate({left: '0'}, 1000);
                     $('#overview').css({left: '-80%'});
                     $('#id').animate({left: '80%'}, 1000);
                 }
                 else if ($('#overview').css({left: '-80%'}){
                     $('#contacts').animate({left: '80'}, 1000);
                     $('#overview').animate({left: '0'}), 1000;
                     $('#id').css({left: '-80%'});
                 }
            }
            else if (ev.type == "swipeleft") {
                console.log('swipeleft');
                $('#overview').animate({left: '0'}, 1000);
                 if ($('#overview').css({left: '0'}){
                     $('#overview').animate({left: '-80%'}, 100);
                     $('#contacts').animate({left: '0'}, 1000);
                     $('#id').css({left: '80%'});
                 }
                 else if ($('#overview').css({left: '-80%'}){
                     $('#overview').animate({left: '0'}, 1000);
                     $('#')
                 }
                 else if ($('#overview').css(("left") == '80%')){

                 }
            }

        });
    }
    $('#overview').click(function click(){
        console.log('click')

    });
    setTimeout((swipe()),5000);
};