// PRELOADER

var tempStyle = document.createElement("style");
tempStyle.innerHTML = "html, body { overflow: hidden; }";
document.getElementsByTagName("head")[0].appendChild(tempStyle);

$(window).on("load",function(){
    $(".preloader-container").delay(1500).fadeOut(1500);
    tempStyle.parentNode.removeChild(tempStyle);
});

// MAIN CODE












