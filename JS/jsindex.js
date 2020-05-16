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
document.getElementById("exi").addEventListener("click", closeNav);
document.getElementById("exi").style.position = "absolute";
document.getElementById("exi").style.right = "0%";
document.getElementById("exi").style.zIndex = "6";
document.getElementById("exi").style.backgroundColor = "transparent";
document.getElementById("exi").style.borderColor = "transparent";
document.getElementById("in").addEventListener("mouseover", pointCursor3);
document.getElementById("exi").addEventListener("mouseover", pointCursor4);

function openNav(){
    document.getElementById("navigationPhone").style.width = "100%";
}

function closeNav(){
    document.getElementById("navigationPhone").style.width = "0%";
}

function pointCursor3(){
    document.getElementById("in").style.cursor = "pointer";
}

function pointCursor4(){
    document.getElementById("exi").style.cursor = "pointer";
}


document.getElementById("com").addEventListener("click", zoom1);
document.getElementById("lan").addEventListener("click", zoom2);
document.getElementById("pho").addEventListener("click", zoom3);

document.getElementById("compu").addEventListener("click", zoom1);
document.getElementById("lands").addEventListener("click", zoom2);
document.getElementById("phon").addEventListener("click", zoom3);

document.getElementById("comput").addEventListener("click", zoom1);
document.getElementById("landsca").addEventListener("click", zoom2);
document.getElementById("phones").addEventListener("click", zoom3);

function zoom1(){
    //document.body.style.zoom = "100%";
    //window.matchMedia("(min-width: 1201px)");
    //document.body.style.maxWidth = "1201px";
    //document.body.style.width = "100%";
    //window.screen.width = "100%";
    var x = document.getElementById("lan").href = "index.html";
    window.open(x, "_blank", "width=1300, height=1300");
}
function zoom2(){
    //document.body.style.zoom = "150%";
    //window.matchMedia("(min-width: 801px) and (max-width: 1200px)");
    //document.body.style.maxWidth = "799px"
    //document.body.style.width = "50%";
    //window.screen.width = "150%";
    //window.resizeTo(100, 100);
    /*var x = document.createElement( "LINK" );
    //x.rel  = 'stylesheet';
    x.setAttribute("rel", "stylesheet");
    //x.type = 'text/css';
    x.setAttribute("type", "text/css");
    //x.href = 'CSS/indexlayout.css';
    x.setAttribute("href", "../CSS/indexlayout.css");
    //x.media = 'screen and (min-width:801px)';
    x.setAttribute("media", "screen and (min-width:801px)");
    document.body.appendChild(x);*/
    //window.style.width = "801px";
    //window.zoom = "150%";
    //document.body.style.transform = "scale('2')";
    var x = document.getElementById("lan").href = "index.html";
    window.open(x, "_blank", "width=1000, height=1000");
}
function zoom3(){
    //document.body.style.zoom = "300%";
    //window.matchMedia("(max-width: 800px)");
    //document.body.style.maxWidth = "800px"
    //document.body.style.width = "300%";
    //window.screen.width = "300%";
    var x = document.getElementById("lan").href = "index.html";
    window.open(x, "_blank", "width=400, height=400");
}

document.getElementById("pic1").style.display = "none";
document.getElementById("pic1").style.visibility = "hidden";
document.getElementById("pic2").style.display = "none";
document.getElementById("pic2").style.visibility = "hidden";

document.getElementById("t").addEventListener("mouseover", showPic);
document.getElementById("t").addEventListener("mouseout", hidePic);

function showPic(){
    document.getElementById("pic1").style.display = "block";
    document.getElementById("pic1").style.visibility = "visible";
    document.getElementById("pic1").style.transition = "2s";
    document.getElementById("pic2").style.display = "block";
    document.getElementById("pic2").style.visibility = "visible";
    document.getElementById("pic1").style.transition = "2s";
}

function hidePic(){
    document.getElementById("pic1").style.display = "none";
    document.getElementById("pic1").style.visibility = "hidden";
    document.getElementById("pic1").style.transition = "2s";
    document.getElementById("pic2").style.display = "none";
    document.getElementById("pic2").style.visibility = "hidden";
    document.getElementById("pic1").style.transition = "2s";
}



mobile();
function mobile(){
    var x = window.matchMedia("(min-width: 800px)");

    function picChange(x){
        if(x.matches){
            document.getElementById("pic1").style.display = "none";
document.getElementById("pic1").style.visibility = "hidden";
document.getElementById("pic2").style.display = "none";
document.getElementById("pic2").style.visibility = "hidden";

document.getElementById("ut").addEventListener("mouseenter", hidePic);
document.getElementById("ut").addEventListener("mouseout", hidePic);

function hidePic(){
    document.getElementById("pic1").style.display = "none";
    document.getElementById("pic1").style.visibility = "hidden";
    document.getElementById("pic1").style.transition = "2s";
    document.getElementById("pic2").style.display = "none";
    document.getElementById("pic2").style.visibility = "hidden";
    document.getElementById("pic1").style.transition = "2s";
}
        }
    }
    picChange(x);
    x.addListener(picChange);
}