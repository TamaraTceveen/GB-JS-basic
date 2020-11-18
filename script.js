// Task 1

var divId = document.getElementById('big');
var imgOne = document.querySelectorAll("img")[0];
var imgTwo = document.querySelectorAll("img")[1];
var imgThree = document.querySelectorAll("img")[2];

function resize(event){
    switch(event.target){
        case imgOne: divId.innerHTML = '<img src="img/big/winter1.jpg">';
        console.log(event.target);
        break;
        case imgTwo: divId.innerHTML = '<img src="img/big/winter2.jpg">';
        console.log(event.target);
        break;
        case imgThree: divId.innerHTML = '<img src="img/big/winter3.jpeg">';
        
        console.log(event.target);
        break;
    }
}

var images = document.querySelectorAll("img.images");
for(var item of images){
   item.onclick = resize;
}

onerror=handleErr;
var txt="";

function handleErr(msg,url,l)
{
txt="There was an error on this page.\n\n";
txt+="Error: " + msg + "\n";
txt+="URL: " + url + "\n";
txt+="Line: " + l + "\n\n";
txt+="Click OK to continue.\n\n";
alert(txt);
return true;
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

