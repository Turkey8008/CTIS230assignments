
mybigimage = document.getElementById("largeview");
card = document.getElementById("card1");

card1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

function makeBigImage() {

    mybigimage.innerHTML = "";
    bigimage = document.createElement("img");
    bigimage.src ="images/Catcher_Cover3.png";
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");
}

function hideBigImage() {
    mybigimage.classList.add("dontshow");
}