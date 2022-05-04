// PRELOADER

var tempStyle = document.createElement("style");
tempStyle.innerHTML = "html, body { overflow: hidden; }";
document.getElementsByTagName("head")[0].appendChild(tempStyle);

$(window).on("load",function(){
    $(".preloader-container").fadeOut(1500);
    tempStyle.parentNode.removeChild(tempStyle);
});
