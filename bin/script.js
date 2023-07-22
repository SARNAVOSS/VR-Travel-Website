function loadImagesInSequence(images) {
    if (!images.length) {
        return;
    }
    var parent = document.getElementsByClassName("loadingImages")[0];
    var arr=[];
    for (var i = 0; i < images.length; i++){
        var img = document.createElement("iframe");
        img.src = images[i];
        arr.push(img);
    }
    parent.appendChild(arr[currIndex]);
    leftArrow.addEventListener("click", function (){
        parent.removeChild(arr[currIndex]);
        currIndex--;
        if (currIndex === -1)
            currIndex = arr.length-1;
        parent.appendChild(arr[currIndex]);
    });
    rightArrow.addEventListener("click", function (){
        parent.removeChild(arr[currIndex]);
        currIndex++;
        currIndex %= arr.length;
        parent.appendChild(arr[currIndex]);
    });

}
var arrows = document.getElementsByClassName("arrows");
var leftArrow = arrows[0], rightArrow = arrows[1];
var currIndex = 0;
loadImagesInSequence(['G:/WebDev/Project/test/New folder/c.jpg']);
