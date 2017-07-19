//app entrance

document.addEventListener('DOMContentLoaded',function(){
                          
});
                          
//listening to click events on social media

//Selector
var facebookIconSelector = '.facebook';

//Elements
var facebookIconElement = document.querySelector(facebookIconSelector);

facebookIconElement.addEventListener('click', openFacebook);

var openFacebook = function () {
    window.open('https://www.codexworld.com', '_blank');
}




