// Describes what should be stored as myitem
myitem = document.getElementById("noindent2");
// Adds an event which occurs when myitem is clicked.
myitem.addEventListener("click", onClick);
// Uses the event as a catalyst for other changes
function onClick() {  
    // Changes the color of myitem to green when it is clicked
    myitem.style.color = "green";
    // Changes the font of myitem to green when it is clicked
    myitem.style.fontFamily = "Courier", "Times", "Times New Roman";  
}
myitem.addEventListener("mouseout", onMouseOut);

function onMouseOut() { 

    myitem.style.color = "blue";
    myitem.style.fontFamily = "";
}