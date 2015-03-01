/**
 * Created by Mathew on 2/28/15.
 */
window.onload=function waitonswipe() {
    if ($('#overview').css(("left") == '0')){
        var previous = document.getElementById('#id');
        var current = document.getElementById('#overview');
        var next = document.getElementById('#contacts');
    }
    else if ($('#overview').css(("left") == '100%')){
        var previous = document.getElementById('#contacts');
        var current = document.getElementById('#id');
        var next = document.getElementById('#overview');
    }
    else if ($('#overview').css(("left") == '-100%')){
        var previous = document.getElementById('#overview');
        var current = document.getElementById('#contacts');
        var next = document.getElementById('#id');
    }
    /*else if ($('#acutalcontact' || $()).css(("left") == '100%')){
        var previous =
        var current =
        var next =
    }*/

// create a simple instance
// by default, it only adds horizontal recognizers
    var mc = new Hammer(current);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
    mc.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

// listen to events...
    mc.on("panleft panright tap press", function(ev) {
        if (ev.type == "panleft"){
            console.log('panleft');
            $('#overview').animate({left: '100%'}, 1000)
        }
        else if (ev.type == "panright"){
            console.log('panright');
            $('#overview').animate({left: '0'}, 1000)
        }
    });

    $('#overview').click(function click(){
        console.log('click')

    });
};