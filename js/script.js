
//http:/web.enavu.com/tutorials/making-an-infinite-jquery-carousel/
//http://jsfiddle.net/joshnh/YxRqp/
//http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
//http://codepen.io/nicklolsen/pen/GyFzk


var scrollAmount = 50;

/*
The function which handles the scroll on the window.
Depending on which element is on top, we can highlight the respective
section on the Navbar.
Also, this function is used to stick the Navbar to the top of the page.
This is done by resizing the navbar in an animation.
 */
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

    if($(window).scrollTop()>=scrollAmount && !$('nav').hasClass('fixed')){
        $('nav').addClass('fixed').animate({ top: 0 }, "slow");
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


/*
The function to handle the click on Navigation Bar's home button.
It scrolls the page down to the respective div.
 */
function homeClick(){

    var div = $("#home");
    target_offset = div.offset();
    target_top = target_offset.top +20 ;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#homeNav').addClass('highlightNav');
}

/*
 The function to handle the click on Navigation Bar's home button.
 It scrolls the page down to the respective div.
 */
function aboutClick(){

    var div = $("#about");
    target_offset = div.offset();
    target_top = target_offset.top +50;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#aboutNav').addClass('highlightNav');
}

/*
 The function to handle the click on Navigation Bar's Modal button.
 It scrolls the page down to the respective div.
 */
function projectsClick(){

    var div = $("#modalDiv");
    target_offset = div.offset();
    target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#projectsNav').addClass('highlightNav');
}

/*
 The function to handle the click on Navigation Bar's Video button.
 It scrolls the page down to the respective div.
 */
function videoClick(){

    var div = $("#videoPanel");
    target_offset = div.offset();
    target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#videoNav').addClass('highlightNav');
}

/*
 The function to handle the click on Navigation Bar's Find Me! button.
 It scrolls the page down to the respective div.
 */
function SocialClick(){

    var div = $("#socialWrapper");
    target_offset = div.offset();
    target_top = target_offset.top - 50;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#socialNav').addClass('highlightNav');
}

/*
 The function to handle the click on Navigation Bar's Thoughts button.
 It scrolls the page down to the respective div.
 */
function colClick(){

    var div = $("#vColumns");
    target_offset = div.offset();
    target_top = target_offset.top;

    $('html, body').animate({scrollTop:target_top}, 500);
    var ul = $("#ulNav");
    ul.children().removeClass('highlightNav');
    $('#columnNav').addClass('highlightNav');
}

/*
Function to switch between the left image highlight/non-highlight for carousel
 */
function leftHighlight(){

    $('#leftClick').fadeIn('slow', function(){
        $('#leftClick').attr("src", "icons/left_clicked.png");
    });
}

/*
 Function to switch between the left image highlight/non-highlight for carousel
 */
function leftRemoveHighlight(){

    $('#leftClick').fadeIn('slow', function(){
        $('#leftClick').attr("src", "icons/left_unclicked.png");
    });
}

/*
 Function to switch between the left image for carousel
 */
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

/*
 Function to switch between the left image for carousel
 */
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

/*
 Function to switch between the right image highlight/non-highlight for carousel
 */
function rightHighlight(){

    $('#rightClick').fadeIn('slow', function(){
        $('#rightClick').attr("src", "icons/right_clicked.png");
    });
}
/*
 Function to switch between the right image highlight/non-highlight for carousel
 */
function rightRemoveHighlight(){

    $('#rightClick').fadeIn('slow', function(){
        $('#rightClick').attr("src", "icons/right_unclicked.png");
    });
}

/*
Function to handle when a given image in the modal is clicked.
It creates the new HTML content to go inside the hidden div and unhides it.
It extracts the id which was passed as a parameter and then find the respective image
 */
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

/*
The function to handle the close button on the modal
 */
function ModalClickedHide(){

    $('#wrapperInner').removeClass('wrapperModalHidden');
    $('#modalHolderid').removeClass('modalHolder');
    $('#modalHolderid').addClass('modalHolderHidden');
    $('#modalHolderid').html("");
    $('#ModalHeader').html('Click on the Image to open');

}