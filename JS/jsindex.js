document.getElementById("navigation").style.display = "none";
document.getElementById("navigation").style.visibility = "hidden";

document.getElementById("HAB").addEventListener("click", showNav);
document.getElementById("HAB").addEventListener("mouseover", pointCursor);
document.getElementById("HAB").style.backgroundColor = "transparent";
document.getElementById("HAB").style.borderColor = "transparent";


document.getElementById("ex").addEventListener("click", hideNav);
document.getElementById("ex").addEventListener("mouseover", pointCursor2);
document.getElementById("ex").style.position = "absolute";
document.getElementById("ex").style.right = "0%";

document.getElementById("ex").style.backgroundColor = "transparent";
document.getElementById("ex").style.borderColor = "transparent";

function showNav(){
    document.getElementById("navigation").style.display = "block";
    document.getElementById("navigation").style.visibility = "visible";
}

function hideNav(){
    document.getElementById("navigation").style.display = "none";
document.getElementById("navigation").style.visibility = "hidden";
}

function pointCursor(){
    document.getElementById("HAB").style.cursor = "pointer";
}

function pointCursor2(){
    document.getElementById("ex").style.cursor = "pointer";
}

document.getElementById("in").addEventListener("click", openNav);
document.getElementById("in").addEventListener("mouseover", pointCursor3);

function openNav(){
    document.getElementById("navigationPhone").style.width = "100%";
}

function pointCursor3(){
    document.getElementById("in").style.cursor = "pointer";
}