var navlinks = document.getElementById("nav-links");


function showMenu(){
  navlinks.style.right="0px";
}
function hideMenu(){
  navlinks.style.right="-200px";
}

//  For Custom Slider

var sliderMain = document.getElementById("slider-main")
var item = document.getElementsByClassName("item");

var forward = () => {

sliderMain.append(item[0]);

}
var backward = () => {

sliderMain.prepend(item[item.length - 1 ]);

} 
//  For Custom Slider 2

var sliderMainOne = document.getElementById("slider-main1")
var itemOne = document.getElementsByClassName("item1");

var forward1 = () => {

sliderMainOne.append(itemOne[0]);

}
var backward1 = () => {

sliderMainOne.prepend(itemOne[itemOne.length - 1 ]);

} 