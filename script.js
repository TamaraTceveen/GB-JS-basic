// Task 1
var images = document.querySelectorAll("img.images");
for(var item of images){
   item.onclick = resize;
}


function resize(event){
    var imageResized=document.createElement('img');
    imageResized.src=event.target.src.replace('/small/','/big/');

    document.getElementById('big').innerHTML=imageResized.outerHTML
    imageResized.onerror=function(){alert('err')}

}




// onerror фото не найдено

// Task 2

var imgMain = document.querySelector("div#insideSlider");
var click = 0;
var imgCount=2;

function slider(direciton){
    if (direciton=='right'){click++}else{click--}
    if (click>imgCount) click=0;
    if (click<0) click=imgCount;
    imgMain.innerHTML = '<img src="img/big/winter' + (click) + '.jpg" class="fade">';

    console.log(click);
}




// imgMain.innerHTML = '<img src="img/big/winter' + (i) + '.jpg">';

