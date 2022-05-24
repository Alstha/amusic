const music=document.querySelector("audio")
const play=document.getElementById("con2")
const title=document.getElementById("title")
const artist=document.getElementById("artist")
const prev=document.getElementById("con1")
const next=document.getElementById("con3")

const p=document.getElementById("p")
const q=document.getElementById("q")
const r=document.getElementById("r")
const s=document.getElementById("s")
const t=document.getElementById("t")
const u=document.getElementById("u")
const v=document.getElementById("v")
const w=document.getElementById("w")
const x=document.getElementById("x")
const y=document.getElementById("y")
const z=document.getElementById("z")
const aa=document.getElementById("aa")
const bb=document.getElementById("bb")
const cc=document.getElementById("cc")
const dd=document.getElementById("dd")
const ee=document.getElementById("ee")
const ff=document.getElementById("ff")
const gg=document.getElementById("gg")

var preload=document.getElementById("load")

function Myfuc(){
    preload.style.display='none';
}

const audio=new Audio();
audio.src="bce.mp3";

var gif=document.getElementById("gif")



let isPlaying=false;

const playMusic= () => {
    isPlaying= true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    gif.classList.add("gif");
    music.style.display='block';
}

const pauseMusic= () => {
    isPlaying= false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    gif.classList.remove("gif");
}
play.addEventListener("click" ,() => {
    if (isPlaying){
        pauseMusic();
        
    }
    else{
        playMusic();}
});



const songs= [
{
    name:"c0",
    title:"0) -Hawayein-",
    artist:"Arijit Singh"
},
{
    name:"c1",
    title:"1) -Aakh Maare-",
    artist:"Neha Kakkar"
},
{
    name:"c2",
    title:"2) -Dhemee Dhemee-",
    artist:"Tony Kakkar"
},    {
    name:"c3",
    title:"3) -Dil Diyan Gallan -",
    artist:"Atif Aslam"
},{
    name:"c4",
    title:"4) -DIL KO KARRAR-",
    artist:"Neha Kakkar"
},
{
    name:"c5",
    title:"5) -Game ON-",
    artist:"Ujjwal Chaurasia"
},    {
    name:"c6",
    title:"6) -Mere Samne Wali-",
    artist:"Ashish Patil"
},
    {
    name:"c7",
    title:"7) -Jaan Nissar-",
    artist:"Arijit Singh"
},
    {
    name:"c8",
    title:"8) -Kusu Kusu-",
    artist:"Zahrah S Khan"
},
    {
    name:"c9",
    title:"9) -Naina-",
    artist:"Arijit Singh"
},    {
    name:"c10",
    title:"10) -OO Sathi-",
    artist:"Payal Dev"
    },{
    name:"c11",
    title:"11) -Raataan Lambiyan-",
    artist:"Asees Kaur"
},
    {
    name:"c12",
    title:"12) -Sweetheart-",
    artist:"Dev Negi"
},    
    {
    name:"c13",
    title:"13) -Vaaste-",
    artist:"Dhvani Bhanushali"
},
    {
    name:"c14",
    title:"14) -Yaalgar-",
    artist:"CarryMinati"
    },
    {
    name:"c15",
    title:"15) -ABHI TOH PARTY-",
    artist:"BADSHAH"
    },
    {
    name:"c16",
    title:"15) -Oo WANTA WoW-",
    artist:"Indravathi Chauhan"
    },
    {
    name:"c17",
    title:"15) -Khatam Hue Waande-",
    artist:"Emiway Bantai"
    },
]

const loadSong= (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src="audio/hin/"+songs.name+".mp3";
};
songIndex = 0;


const nextSong = () => {
    
    songIndex=(songIndex+1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong = () => {
    
    songIndex=(songIndex-1 + songs.length) % songs.length ;
    loadSong(songs[songIndex]);
    playMusic();
};
    const pSong = () => {
        loadSong(songs[0]);
        playMusic();
    };
    const qSong = () => {
        loadSong(songs[1]);
        playMusic();
    };
    const rSong = () => {
        loadSong(songs[2]);
        playMusic();
    };
    const sSong = () => {
        loadSong(songs[3]);
        playMusic();
    };
    const tSong = () => {
        loadSong(songs[4]);
        playMusic();
    };
    const uSong = () => {
        loadSong(songs[5]);
        playMusic();
    };
    const vSong = () => {
        loadSong(songs[6]);
        playMusic();
    };
    const wSong = () => {
        loadSong(songs[7]);
        playMusic();
    };
    const xSong = () => {
        loadSong(songs[8]);
        playMusic();
    };
    const ySong = () => {
        loadSong(songs[9]);
        playMusic();
    };
    const zSong = () => {
        loadSong(songs[10]);
        playMusic();
    };
    const aaSong = () => {
        loadSong(songs[11]);
        playMusic();
    };
    const bbSong = () => {
        loadSong(songs[12]);
        playMusic();
    };
    const ccSong = () => {
        loadSong(songs[13]);
        playMusic();
        

    };
    const ddSong = () => {
        loadSong(songs[14]);
        playMusic();
        
    };
    const eeSong = () => {
        loadSong(songs[15]);
        playMusic();
        
    };
    const ffSong = () => {
        loadSong(songs[16]);
        playMusic();
        
    };
    const ggSong = () => {
        loadSong(songs[17]);
        playMusic();
        
    };
   
    
music.addEventListener("ended", nextSong);
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

p.addEventListener('click', pSong);
q.addEventListener('click', qSong);
r.addEventListener('click', rSong);
s.addEventListener('click', sSong);
t.addEventListener('click', tSong);
u.addEventListener('click', uSong);
v.addEventListener('click', vSong);
w.addEventListener('click', wSong);
x.addEventListener('click', xSong);
y.addEventListener('click', ySong);
z.addEventListener('click', zSong);
aa.addEventListener('click', aaSong);
bb.addEventListener('click', bbSong);
cc.addEventListener('click', ccSong);
dd.addEventListener('click', ddSong);
ee.addEventListener('click', eeSong);
ff.addEventListener('click', ffSong);
gg.addEventListener('click', ggSong);










