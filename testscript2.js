mybutton = document.getElementById("thebutton");  
newitem = document.getElementById("buttontest");

mybutton.addEventListener("click", onButtonClick)

function onButtonClick() {  

    newitem.style.color = "darkred";  
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    
    newtext = myinput.value;  
    newitem.innerHTML = newtext;  
}


