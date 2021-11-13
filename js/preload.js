var $ = function (id) { return document.getElementById(id); };
var imageMem = [];

function cycleImages(imageArray, elementId) {
    var i = 0;
    var elem = $(elementId);

    function toggleImages() {
        elem.src = imageArray[i];
        i = (i + 1) % imageArray.length;
    }

    setInterval(toggleImages, 3000);
}
function changeDisplayImage() {
document.getElementById('banner1').src=imageSrc
console.log(document.getElementById('banner1').src)
}

function preloadImages(imageArray, index) {
    index = index || 0;
    
    if (imageArray && imageArray.length > index) {
      
        var img = new Image ();
       
        img.onload = function() {
            preloadImages(imageArray, index + 1);
        }
        img.src = images[index];
}
/* images is an array with image metadata */
preload(images);

}

function bigImg(BImg) {
    BImg.style.height="400px";
    BImg.style.width="400px";
    BImg.style.poistion="fixed";
}

function normalImg(SImg){
    SImg.style.height="200px";
    SImg.style.width="200px";
    SImg.style.poistion="fixed";
}

var $ = function (id) { return document.getElementById(id); };
var imageMem = [];

