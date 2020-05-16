

document.getElementById("words").addEventListener("mouseover", showSidePics);
document.getElementById("words").addEventListener("mouseout", hideSidePic);

function showSidePics(){
    document.getElementById("pic1").style.width = "100%";
    document.getElementById("pic2").style.width = "100%";
}

function hideSidePic(){
    document.getElementById("pic1").style.width = "0%";
    document.getElementById("pic2").style.width = "0%";
}


document.getElementById("sideOne").style.display = "none";
document.getElementById("sideOne").style.visibility = "hidden";

document.getElementById("sideTwo").style.display = "none";
document.getElementById("sideTwo").style.visibility = "hidden";

document.getElementById("words").addEventListener("mouseover", startIt);
document.getElementById("words").addEventListener("mouseout", stopIt);

function startIt(){
    document.getElementById("sideOne").style.display = "block";
document.getElementById("sideOne").style.visibility = "visible";

document.getElementById("sideTwo").style.display = "block";
document.getElementById("sideTwo").style.visibility = "visible";

document.getElementById("side3").style.display = "none";
document.getElementById("side3").style.visibility = "hidden";

document.getElementById("side4").style.display = "none";
document.getElementById("side4").style.visibility = "hidden";
}

function stopIt(){
    document.getElementById("sideOne").style.display = "none";
document.getElementById("sideOne").style.visibility = "hidden";

document.getElementById("sideTwo").style.display = "none";
document.getElementById("sideTwo").style.visibility = "hidden";

document.getElementById("side3").style.display = "block";
document.getElementById("side3").style.visibility = "visible";

document.getElementById("side4").style.display = "block";
document.getElementById("side4").style.visibility = "visible";
}