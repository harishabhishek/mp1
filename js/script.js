var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}


//http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((( elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)));
}


var scrollAmount = 50;

$(window).on('scroll', function(){

    if($(window).scrollTop() > $('#home').offset().top -50){
        var ul = $("#ulNav");
        ul.children().removeClass('highlightNav');
        $('#homeNav').addClass('highlightNav');
    }
    if($(window).scrollTop() > $('#about').offset().top -50){
        var ul = $("#ulNav");
        ul.children().removeClass('highlightNav');
        $('#aboutNav').addClass('highlightNav');
    }
    if($(window).scrollTop() > $('#modalDiv').offset().top -50){
        var ul = $("#ulNav");
        ul.children().removeClass('highlightNav');
        $('#projectsNav').addClass('highlightNav');
    }
    if($(window).scrollTop() > $('#videoPanel').offset().top - 50){
        var ul = $("#ulNav");
        ul.children().removeClass('highlightNav');
        $('#videoNav').addClass('highlightNav');
    }
    if($(window).scrollTop() > ($('#vColumns').offset().top -50 )){
        var ul = $("#ulNav");
        ul.children().removeClass('highlightNav');
        $('#columnNav').addClass('highlightNav');
    }
    if($(window).scrollTop() > ($('#socialWrapper').offset().top - 200 )){
        var ul = $("#ulNav");
        ul.children().removeClass('highlightNav');
        $('#socialNav').addClass('highlightNav');
    }


    if (isScrolledIntoView($('#home'))){
        console.log("True");
    }
    else{
        console.log("False");
    }

    if($(window).scrollTop()>=scrollAmount && !$('nav').hasClass('fixed')){
        $('nav').addClass('fixed').animate({ top: 0 });
        $('#homeNav').addClass('shrunkli');
        $('#aboutNav').addClass('shrunkli');
        $('#projectsNav').addClass('shrunkli');
        $('#videoNav').addClass('shrunkli');
        $('#socialNav').addClass('shrunkli');
        $('#columnNav').addClass('shrunkli');


    }
    else if($(window).scrollTop()<scrollAmount && $('nav').hasClass('fixed')){
        $('nav').removeClass('fixed');
        $('li').removeClass('shrunkli');
    }
});

//http:/web.enavu.com/tutorials/making-an-infinite-jquery-carousel/


//http://jsfiddle.net/joshnh/YxRqp/

function homeClick(){

    var div = $("#home");
    target_offset = div.offset();
    target_top = target_offset.top +20 ;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#homeNav').addClass('highlightNav');
}

function aboutClick(){

    var div = $("#about");
    target_offset = div.offset();
    target_top = target_offset.top +50;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#aboutNav').addClass('highlightNav');
}

function projectsClick(){

    var div = $("#modalDiv");
    target_offset = div.offset();
    target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#projectsNav').addClass('highlightNav');
}

function videoClick(){

    var div = $("#videoPanel");
    target_offset = div.offset();
    target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#videoNav').addClass('highlightNav');
}

function SocialClick(){

    var div = $("#socialWrapper");
    target_offset = div.offset();
    target_top = target_offset.top - 50;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#socialNav').addClass('highlightNav');
}

function colClick(){

    var div = $("#vColumns");
    target_offset = div.offset();
    target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#columnNav').addClass('highlightNav');
}

function leftHighlight(){

    $('#leftClick').fadeIn('slow', function(){
        $('#leftClick').attr("src", "icons/left_clicked.png");
    });
}

function leftRemoveHighlight(){

    $('#leftClick').fadeIn('slow', function(){
        $('#leftClick').attr("src", "icons/left_unclicked.png");
    });
}

function leftClicked(){
    var imgElem = document.getElementById('carouselImg');
    var name = imgElem.src;
    var id = name.charAt(name.length - 5);
    id = parseInt(id);
    id = id-1;
    if(id<0)
        id = 2;

    console.log(id);
    var newPath = "carousel/carouselImg"+id +".png";
    $('#carouselImg').fadeOut(500, function() {
        $('#carouselImg').attr("src",newPath);
        $('#carouselImg').fadeIn(500);
    });
}

function rightClicked(){
    var imgElem = document.getElementById('carouselImg');
    var name = imgElem.src;
    var id = name.charAt(name.length - 5);

    id = parseInt(id);
    id++;
    if(id>2)
        id = 0;

    var newPath = "carousel/carouselImg"+id +".png";
    $('#carouselImg').fadeOut(500, function() {
        $('#carouselImg').attr("src",newPath);
        $('#carouselImg').fadeIn(500);
    });
}

function haha(){
    alert("Haha");
}

function rightHighlight(){

    $('#rightClick').fadeIn('slow', function(){
        $('#rightClick').attr("src", "icons/right_clicked.png");
    });
}

function rightRemoveHighlight(){

    $('#rightClick').fadeIn('slow', function(){
        $('#rightClick').attr("src", "icons/right_unclicked.png");
    });
}


function ModalClicked(clicked_id){

    $('#wrapperInner').addClass('wrapperModalHidden');
    $('#modalHolderid').removeClass('modalHolderHidden');
    $('#modalHolderid').addClass('modalHolder');
    var imageName = "modal/modal" + clicked_id + ".jpg";
    var img = "<img src='" + imageName+"' id='modalImage'>";
    var close = "<img src='icons/close.png' id='modalButtonHide' onclick='ModalClickedHide()' onMouseOver=\"this.src='icons/close2.png'\" onMouseOut=\"this.src='icons/close.png'\" >";
    var code = close + img;
    $('#modalHolderid').html(code);
    $('#ModalHeader').html('');
}

function ModalClickedHide(){

    $('#wrapperInner').removeClass('wrapperModalHidden');
    $('#modalHolderid').removeClass('modalHolder');
    $('#modalHolderid').addClass('modalHolderHidden');
    $('#modalHolderid').html("");
    $('#ModalHeader').html('Click on the Image to open');

}