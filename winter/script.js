var img= document.getElementById("con2")
var audio= document.getElementById("audio")
var gif=document.getElementById("gif")
var preload=document.getElementById("load")

function Myfuc(){
    preload.style.display='none';
}
img.onclick= function(){
    if (audio.paused) {
        audio.play();
        img.src="winter/img/pause.png";
        img.style.boxShadow="-10px -10px 22px rgb(206, 49, 75)";
        gif.style.display="block";
        audio.style.display="block";
    }
    else{
        audio.pause();
        img.src="winter/img/play.jpg";
        img.style.boxShadow="10px 10px 22px rgb(107, 206, 49),-10px -10px 22px rgb(107, 206, 49)";
        gif.style.display="none";
        audio.style.display="none";
       
        
    }
}

