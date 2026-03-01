window.addEventListener("load", function(){
document.getElementById("preloader").style.display="none";
});

function openInvite(){
document.getElementById("envelope").style.display="none";
document.getElementById("content").style.display="block";
document.getElementById("bgMusic").play();
}

function toggleMusic(){
var music=document.getElementById("bgMusic");
if(music.paused){
music.play();
}else{
music.pause();
}
}

// Nama tamu otomatis
const params=new URLSearchParams(window.location.search);
const guest=params.get("to");
if(guest){
document.getElementById("guestName").textContent=guest;
}

// Countdown
const countDate=new Date("May 06, 2026 10:00:00").getTime();

setInterval(()=>{
const now=new Date().getTime();
const distance=countDate-now;

const d=Math.floor(distance/(1000*60*60*24));
const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((distance%(1000*60*60))/(1000*60));
const s=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=d;
document.getElementById("hours").innerHTML=h;
document.getElementById("minutes").innerHTML=m;
document.getElementById("seconds").innerHTML=s;

},1000);

// Swiper
var swiper = new Swiper(".mySwiper", {
loop:true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
autoplay:{
delay:3000,
disableOnInteraction:false,
},
});