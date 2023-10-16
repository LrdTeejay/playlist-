const btnPlay = document.getElementById("btnPlay");
const audioPlayer =  new Audio ("Hate.Me_Juice.Wrld.mp3");
const btnPrevious = document.getElementById("btnPrevious");
const pic = document.getElementById("pic");
const btnNext = document.getElementById("btnNext");
const title = document.getElementById("title");
const main = document.getElementById("main");
let index = 0;
const list = [
  {
    song:"Hate.Me_Juice.Wrld.mp3",
    images:"juice_two.jpeg",
    name:"Hate.Me_Juice.Wrld"
  },
  {
    song:"Ruger.mp3",
    images:"ruger.jpg",
    name:"Ruger Champion"
  },
  {
    song:"Juice.Bad.Energy.mp3",
    images:"juice_one.jpeg",
    name:"Juice.Bad.Energy"
  }
  ];
let isPlaying = false;
btnPlay.addEventListener("click", function(){
    isPlaying = !isPlaying;
    if(isPlaying===true){
      audioPlayer.play();
    }else{
      audioPlayer.pause();
    }
});
btnPrevious.addEventListener("click", function(){
   index--;
   if(index < 0){
    index = list.length - 1;
    audioPlayer.play();
   };
   audioPlayer.src = list[index].song;
   audioPlayer.play();
   pic.style.backgroundImage = "url("+list[index].images+")";
   document.getElementById("title").innerHTML = list[index].name;
   if(index === 1){
      document.getElementById("main").innerHTML = "Ruger"
    } else{
      document.getElementById("main").innerHTML="Juice Wrld"
    }
});
btnNext.addEventListener("click", function(){
    index++;
    if(index === list.length){
        index = 0
        audioPlayer.play();
    };
    audioPlayer.src = list[index].song;
    audioPlayer.play();
  pic.style.backgroundImage = "url("+list[index].images+")";
    document.getElementById("title").innerHTML = list[index].name;
    if(index === 1){
      document.getElementById("main").innerHTML = "Ruger"
    } else{
      document.getElementById("main").innerHTML="Juice Wrld"
    }
});