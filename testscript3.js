myitem = document.getElementById("salingerparagraph");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "green";
    myitem.style.fontFamily = "Courier", "Times", "Times New Roman";  
    myitem.style.fontSize = "24px";
}

myitem.addEventListener("mouseout", onMouseOut);

function onMouseOut() { 

    myitem.style.color = "blue";
    myitem.style.fontFamily = "";
    myitem.style.fontSize = "18px";
    // myitem.classList.add("dontshow")
}