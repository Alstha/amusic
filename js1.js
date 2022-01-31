const music=document.querySelector("audio")
const play=document.getElementById("con2")
const title=document.getElementById("title")
const artist=document.getElementById("artist")
const prev=document.getElementById("con1")
const next=document.getElementById("con3")

const a=document.getElementById("a")
const b=document.getElementById("b")
const c=document.getElementById("c")
const d=document.getElementById("d")
const e=document.getElementById("e")
const f=document.getElementById("f")
const g=document.getElementById("g")
const h=document.getElementById("h")
const i=document.getElementById("i")
const j=document.getElementById("j")
const k=document.getElementById("k")
const l=document.getElementById("l")
const m=document.getElementById("m")
const n=document.getElementById("n")
const o=document.getElementById("o")
const p=document.getElementById("p")
const q=document.getElementById("q")
const r=document.getElementById("r")
const s=document.getElementById("s")
const t=document.getElementById("t")
const u=document.getElementById("u")
const v=document.getElementById("v")

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
    name:"a0",
    title:"0) -Believer-",
    artist:"Imagine Dragon"
},
{
    name:"a1",
    title:"1) -Peaches-",
    artist:"Justin Bieber"
},
{
    name:"a2",
    title:"2) -Love Me Like You Do-",
    artist:"Ellie Goulding"
},
{
    name:"a3",
    title:"3) -STAY-",
    artist:"Justin Bieber"
},
{
    name:"a4",
    title:"4) -FADED-",
    artist:"Alan Walker"
},
{
    name:"a5",
    title:"5) -Never Say Never-",
    artist:"Justin Bieber"
},
{
    name:"a6",
    title:"6) -Despacito-",
    artist:"Luis Fonsi"
},    {
    name:"a7",
    title:"7) -Perfect-",
    artist:"Ed Sheeran"
},
{
    name:"a8",
    title:"8) -Waka Waka-",
    artist:"Shakira"
},
{
    name:"a9",
    title:"9) -SORRY-",
    artist:"Justin Bieber"
},    {
    name:"a10",
    title:"10) -Let Me Love You-",
    artist:"Justinee"
},{
    name:"a11",
    title:"11) -ALONE-",
    artist:"Marshmellow"
},
{
    name:"a12",
    title:"12) -Shape Of You-",
    artist:"Ed Sheeran"
},    {
    name:"a13",
    title:"13) -BABY-",
    artist:"Justin Bieber"
},
{
    name:"a14",
    title:"14) -Senorita-",
    artist:"Shawn Mendes"
},
{
    name:"b0",
    title:"0) -Perfect-",
    artist:"Ed Sheeran"
},
{
    name:"b1",
    title:"1) -Waka Waka-",
    artist:"Shakira"
},
{
    name:"b2",
    title:"2) -SORRY-",
    artist:"Justin Bieber"
},    {
    name:"b3",
    title:"3) -Let Me Love You-",
    artist:"Justinee"
},{
    name:"b4",
    title:"4) -ALONE-",
    artist:"Marshmellow"
},
{
    name:"b5",
    title:"5) -Shape Of You-",
    artist:"Ed Sheeran"
},    {
    name:"b6",
    title:"6) -BABY-",
    artist:"Justin Bieber"
}

]

const loadSong= (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src="audio/eng/"+songs.name+".mp3";
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
    const aSong = () => {
        loadSong(songs[0]);
        playMusic();
    };
    const bSong = () => {
        loadSong(songs[1]);
        playMusic();
    };
    const cSong = () => {
        loadSong(songs[2]);
        playMusic();
    };
    const dSong = () => {
        loadSong(songs[3]);
        playMusic();
    };
    const eSong = () => {
        loadSong(songs[4]);
        playMusic();
    };
    const fSong = () => {
        loadSong(songs[5]);
        playMusic();
    };
    const gSong = () => {
        loadSong(songs[6]);
        playMusic();
    };
    const hSong = () => {
        loadSong(songs[7]);
        playMusic();
    };
    const iSong = () => {
        loadSong(songs[8]);
        playMusic();
    };
    const jSong = () => {
        loadSong(songs[9]);
        playMusic();
    };
    const kSong = () => {
        loadSong(songs[10]);
        playMusic();
    };
    const lSong = () => {
        loadSong(songs[11]);
        playMusic();
    };
    const mSong = () => {
        loadSong(songs[12]);
        playMusic();
    };
    const nSong = () => {
        loadSong(songs[13]);
        playMusic();
    };
    const oSong = () => {
        loadSong(songs[14]);
        playMusic();
    };
    const pSong = () => {
        loadSong(songs[15]);
        playMusic();
    };
    const qSong = () => {
        loadSong(songs[16]);
        playMusic();
    };
    const rSong = () => {
        loadSong(songs[17]);
        playMusic();
    };
    const sSong = () => {
        loadSong(songs[18]);
        playMusic();
    };
    const tSong = () => {
        loadSong(songs[19]);
        playMusic();
    };
    const uSong = () => {
        loadSong(songs[20]);
        playMusic();
    };
    const vSong = () => {
        loadSong(songs[21]);
        playMusic();
    };
    
music.addEventListener("ended", nextSong);
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

a.addEventListener('click', aSong);
b.addEventListener('click', bSong);
c.addEventListener('click', cSong);
d.addEventListener('click', dSong);
e.addEventListener('click', eSong);
f.addEventListener('click', fSong);
g.addEventListener('click', gSong);
h.addEventListener('click', hSong);
i.addEventListener('click', iSong);
j.addEventListener('click', jSong);
k.addEventListener('click', kSong);
l.addEventListener('click', lSong);
m.addEventListener('click', mSong);
n.addEventListener('click', nSong);
o.addEventListener('click', oSong);
p.addEventListener('click', pSong);
q.addEventListener('click', qSong);
r.addEventListener('click', rSong);
s.addEventListener('click', sSong);
t.addEventListener('click', tSong);
u.addEventListener('click', uSong);
v.addEventListener('click', vSong);











