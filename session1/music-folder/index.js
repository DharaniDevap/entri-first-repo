let imageofthesong = document.getElementById("imageofthesong")
let titleofthesong = document.getElementById("titleofcard")
let moviename = document.getElementById("moviename")
let singerofthesong = document.getElementById("singername")
let audioofsong =document.getElementById("audio")
let prevofsong = document.getElementById("prvbtn")
let playofsong = document.getElementById("plybtn")
let nextofsong = document.getElementById("nextbtn")


let musiclist =[
    {
        songname:"hi-nanna",
        movieName:"hi nanna",
        singerName:"Hesham"
    },
        {
        songname:"og",
        movieName:"og",
        singerName:"Thaman"
    },
        {
        songname:"saiyaara",
        movieName:"saiyaara",
        singerName:"Mithoon"
    }


]
let currentIndex=0
function loadSong(song){
    imageofthesong.src=` images/${song.songname}.jpg`
    audioofsong.src=` songs/${song.songname}.mp3`
    titleofthesong.textContent =song.songname,
    moviename.textContent = song.movieName,
    singerofthesong.textContent = song.singerName
}
loadSong(musiclist[currentIndex])

let isplaying = false;
function playsong(){
isplaying = true;
audioofsong.play();
playofsong.textContent = "Pause"
}
function pausesong(){
isplaying = false;
audioofsong.pause();
playofsong.textContent = "play"
}
function playorpausesong(){
    if(isplaying){
        pausesong()
    }else{
playsong()
    }
}
function nextsongplay(){
    currentIndex++
    if(currentIndex==musiclist.length-1){
        currentIndex = 0
    }
    loadSong(musiclist[currentIndex])  
    playsong()
}
function prevsongplay(){
    currentIndex--
    if(currentIndex<0){
    currentIndex =musiclist.length-1
    }
    loadSong(musiclist[currentIndex])
    playsong()
}

playofsong.addEventListener("click",playorpausesong)
nextofsong.addEventListener("click",nextsongplay)
prevofsong.addEventListener("click",prevsongplay)